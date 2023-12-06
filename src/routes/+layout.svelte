<script>
  import "../app.pcss"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import { sidebarShown } from '$lib/store'
  import { fade } from "svelte/transition"

  export let data
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="loop.webm" autoplay loop class="fixed object-cover top-0 left-0 h-full w-full"/>

{#key data}
  <main class="z-10 fixed h-full w-full flex flex-col p-8" in:fade={{ delay: 300 }} out:fade>
    <slot />
  </main>
{/key}

{#if $sidebarShown}
  <Sidebar />
{/if}