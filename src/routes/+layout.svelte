<script>
  import "../app.pcss"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import { sidebarShown } from '$lib/store'
  import { fade } from "svelte/transition"

  import Icon from '$lib/icons/Icon.svelte'
  import GoBack from '$lib/icons/GoBack.svelte'
  import SidebarIcon from '$lib/icons/SidebarIcon.svelte'

  import { page } from '$app/stores'

  export let data
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="loop.webm" autoplay loop class="fixed object-cover top-0 left-0 h-full w-full"/>

<div class="z-20 absolute left-8 top-8">
  <button class="inline-block" on:click={() => $sidebarShown = !$sidebarShown}>
      <SidebarIcon />
  </button>

  {#if $page.url.pathname !== "/"}
    <a transition:fade class="inline-block ml-4" href="/">
      <GoBack />
    </a>
  {/if}
</div>

<div class="z-20 absolute right-8 top-8">
    <Icon />
</div>

{#key data}
  <main class="z-10 fixed h-full w-full flex flex-col p-8" in:fade={{ delay: 300 }} out:fade>
    <slot />
  </main>
{/key}

{#if $sidebarShown}
  <Sidebar />
{/if}