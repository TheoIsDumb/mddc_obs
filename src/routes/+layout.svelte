<script>
  import "../app.pcss"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import { sidebarShown } from '$lib/store'
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="loop.webm" autoplay loop class="fixed object-cover top-0 left-0 h-full w-full"/>

<slot />

{#if $sidebarShown}
  <Sidebar />
{/if}