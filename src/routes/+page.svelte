<script>
    import Icon from '$lib/Icon.svelte'
    
    let timeString = "17:30:00"
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="loop.webm" autoplay loop class="fixed object-cover top-0 left-0 h-full w-full"/>

<main class="z-10 fixed h-full w-full flex flex-col items-end justify-between p-8">
    <Icon />
    <h1 class="font-bold text-white">hello</h1>
</main>