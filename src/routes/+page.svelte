<script>
    import Icon from '$lib/icons/Icon.svelte'
    import LeftArrow from '$lib/icons/LeftArrow.svelte'
    import Countdown from '$lib/components/Countdown.svelte';
    
    import { sidebarShown } from '$lib/store'
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="loop.webm" autoplay loop class="fixed object-cover top-0 left-0 h-full w-full"/>

<main class="z-10 fixed h-full w-full flex flex-col items-end justify-between p-8">
    <div class="flex flex-col items-end gap-8">
        <Icon />
        <button on:click={() => $sidebarShown = !$sidebarShown}>
            <LeftArrow />
        </button>
    </div>

    <img src="christ.png" alt="lmao" class="h-[140%] fixed left-8"/>

    <div class="flex flex-col gap-2">
        <Countdown />
        <div class="bg-white h-[2px] mt-[-0.5rem] w-full"/>
        <h6 class="font-bold text-right text-2xl text-white">Vettucaud Media Commission</h6>
    </div>
</main>