<script>
    import { malayalamText } from '$lib/store'
    import '@fontsource/gayathri/700.css'
</script>

<div class="flex h-full w-full flex-col items-end justify-between">
    <!-- <img src="/christ.avif" alt="lmao" class="h-[150%] fixed left-24 top-0"/> -->

    <div class="flex flex-col gap-2 xl:gap-4 mt-auto">
        <h1 class="text font-bold text-white text-4xl xl:text-6xl text-right">{@html $malayalamText}</h1>
        <div class="bg-white h-[2px] w-full"/>
        <h6 class="font-bold text-right text-2xl text-white">Vettucaud Media Commission</h6>
    </div>
</div>

<style>
    h1.text {
        font-family: "Inter Tight", "Gayathri", sans-serif;
    }
</style>