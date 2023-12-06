<script>
    let list = ["Countdown", "Text"]
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
    <div class="buttons flex flex-col border-white/50 border-2 rounded">
        {#each list as i}
            <a href={'/' + i.toLowerCase()}
            class="text-white text-2xl border-b-2 last:border-b-0 border-white/50
            hover:bg-white/40 hover:text-white transition duration-300
            w-full px-4 py-2 text-center">
            {i}
        </a>
        {/each}
    </div>
</div>