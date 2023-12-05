<script>
    import { sidebarShown } from '$lib/store'
    import Close from '$lib/icons/Close.svelte'
    import { fade } from 'svelte/transition'
</script>

<div transition:fade class="sidebar h-full w-full fixed top-0 left-0 bg-black/40 z-20">
    <button class="absolute left-8 top-8" on:click={() => $sidebarShown = !$sidebarShown}>
        <Close />
    </button>
</div>