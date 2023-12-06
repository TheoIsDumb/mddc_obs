<script>
    let list = ["Stream", "Malayalam"]
</script>

<main class="z-10 fixed h-full w-full flex flex-col items-center justify-center p-8">
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
</main>