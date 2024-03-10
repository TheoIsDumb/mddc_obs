<script>
    import { sidebarShown, streamTime, malayalamText, options } from '$lib/store'
    import Close from '$lib/icons/Close.svelte'
    import { fade, slide } from 'svelte/transition'
    import { page } from '$app/stores'

    let timesList = ["06:00:00 AM", "05:30:00 PM", "06:45:00 PM"]

    let malayalamTextOptions = [
        { id: "ദിവ്യബലി" , text: "ദിവ്യബലി <br /> ഉടൻ ആരംഭിക്കുന്നതാണ്." },
        { id: "പാദപൂജ" , text: "പാദപൂജ <br /> ഉടൻ ആരംഭിക്കുന്നതാണ്." },
        { id: "കുരിശിന്റെ വഴി" , text: "കുരിശിന്റെ വഴി <br /> ഉടൻ ആരംഭിക്കുന്നതാണ്." },
        { id: "Holy Mass" , text: "The Holy Mass <br /> will commence soon." },
    ]
</script>

<div transition:fade class="sidebar h-full w-full fixed top-0 left-0 bg-zinc-950/60 text-white z-30">
    <div in:slide={{ axis: 'x' }} out:fade class="cont absolute left-0 top-0 p-8 h-full w-1/5 bg-zinc-950/90 flex flex-col">
        <button on:click={() => $sidebarShown = !$sidebarShown} class="mb-8">
            <Close />
        </button>

        {#if $page.url.pathname === "/countdown"}
            <div class="choose mb-4">
                <h1 class="font-bold text-xl mb-2">Choose Stream Time</h1>

                <div class="buttons flex flex-col items-center rounded border-white/50 border-2">
                    {#each timesList as item}
                        <button class="choose w-full hover:bg-white hover:text-black border-b border-white/50 last:border-bottom-0
                        rounded transition duration-300"
                        on:click={() => $streamTime = new Date().toLocaleDateString('en-US', options) + `, ${item}`}
                        >{item}</button>
                    {/each}
                </div>
            </div>

            <div class="customTiming mb-4">
                <h1 class="font-bold text-xl mb-2">Choose Custom Stream Time</h1>
                <input type="datetime-local" bind:value={$streamTime}
                class="bg-transparent text-white border-white/50 border-2 w-full p-2"/>
            </div>
        {/if}

        {#if $page.url.pathname === "/text"}
            <div class="preset mb-4">
                <h1 class="font-bold text-xl mb-2">Text Presets</h1>

                <div class="buttons flex flex-col items-center rounded border-white/50 border-2">
                    {#each malayalamTextOptions as opt}
                        <button class="choose w-full hover:bg-white hover:text-black
                        border-b border-white/50 last:border-bottom-0
                        rounded transition duration-300"
                        on:click={() => $malayalamText = opt.text} 
                        >{opt.id}</button>
                    {/each}
                </div>
            </div>

            <div class="customText mb-4">
                <h1 class="font-bold text-xl mb-2">Custom Text</h1>

                <input type="text" bind:value={$malayalamText}
                class="bg-transparent border-[1.5px] focus:border-blue-300 rounded w-full outline-none transition duration-300 px-3 py-2"/>
            </div>
        {/if}

        <span class="mt-auto">
            <span>created by</span>
            <span class="font-bold text-2xl">theo.</span>
        </span>
    </div>
</div>

<style>
    .preset button, .customText {
        font-family: "Inter Tight", "Gayathri", sans-serif;
    }
</style>