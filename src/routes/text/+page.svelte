<script>
    import { malayalamText } from '$lib/store'
    import '@fontsource/gayathri/700.css'
</script>

<div class="flex h-full w-full flex-col items-end justify-between">
    <img src="/christ.png" alt="lmao" class="h-[150%] fixed left-24 top-0"/>

    <div class="flex flex-col gap-2 mt-auto">
        <h1 class="text font-bold text-white text-4xl text-right">{@html $malayalamText}</h1>
        <div class="bg-white h-[2px] mt-[-0.5rem] w-full"/>
        <h6 class="font-bold text-right text-2xl text-white">Vettucaud Media Commission</h6>
    </div>
</div>

<style>
    h1.text {
        font-family: "Gayathri", sans-serif;
    }
</style>