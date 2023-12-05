<script>
  import "../app.pcss"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import { sidebarShown } from '$lib/store'
</script>

<slot />

{#if $sidebarShown}
  <Sidebar />
{/if}