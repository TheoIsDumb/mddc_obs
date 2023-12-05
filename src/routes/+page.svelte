<script>
    import Icon from '$lib/icons/Icon.svelte'
    import Countdown from '$lib/components/Countdown.svelte';
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="loop.webm" autoplay loop class="fixed object-cover top-0 left-0 h-full w-full"/>

<main class="z-10 fixed h-full w-full flex flex-col items-end justify-between p-8">
    <Icon />

    <img src="christ.png" alt="lmao" class="h-[140%] fixed left-8"/>

    <div>
        <Countdown />
        <hr class="bg-white h-[1px] w-full"/>
    </div>
</main>