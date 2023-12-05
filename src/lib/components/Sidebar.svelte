<script>
    import { sidebarShown, streamTime } from '$lib/store'
    import Close from '$lib/icons/Close.svelte'
    import { fade } from 'svelte/transition'

    $: console.log($streamTime)

    let options = { timeZone: "Asia/Kolkata", year: 'numeric', month: '2-digit', day: '2-digit' }
    let timesList = ["06:00:00 AM", "05:30:00 PM", "06:45:00 PM"]
</script>

<div transition:fade class="sidebar h-full w-full fixed top-0 left-0 bg-black/40 z-20">
    <div class="cont absolute left-0 top-0 p-8 h-full bg-zinc-950/80">
    <button on:click={() => $sidebarShown = !$sidebarShown}>
        <Close />
    </button>

    <div class="choose text-white">
        <h1 class="font-bold">Choose Stream Time</h1>

        <div class="buttons flex flex-col items-center gap-2">
            {#each timesList as item}
                <button class="choose w-full border-white/50 border-2"
                on:click={() => $streamTime = new Date().toLocaleDateString('en-US', options) + `, ${item}`}
                >{item}</button>
            {/each}
        </div>
    </div>
    </div>
</div>