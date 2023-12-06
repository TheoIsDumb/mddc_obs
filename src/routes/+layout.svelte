<script>
  import "../app.pcss"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import { sidebarShown } from '$lib/store'
  import { fade } from "svelte/transition"

  import Icon from '$lib/icons/Icon.svelte'
  import GoBack from '$lib/icons/GoBack.svelte'
  import SidebarIcon from '$lib/icons/SidebarIcon.svelte'

  import "@fontsource/inter-tight"

  import { page } from '$app/stores'

  export let data
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="/loop.webm" autoplay loop class="fixed object-cover top-0 left-0 h-full w-full"/>

  {#if $page.url.pathname !== "/"}
    <div transition:fade class="z-20 absolute left-8 top-8">
      <button class="inline-block" on:click={() => $sidebarShown = !$sidebarShown}>
          <SidebarIcon />
      </button>

        <a class="inline-block ml-4" href="/">
          <GoBack />
        </a>
    </div>
  {/if}

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

<style>
  :global(body) {
    font-family: "Inter Tight", sans-serif;
  }
</style>