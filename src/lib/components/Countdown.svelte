<script>
	let value = new Date().toISOString().slice(0,10) + 'T23:30'

	let now = new Date()
	setInterval(() => now = new Date(), 1000)
	
	$: result = new Date(value) - now

	function timeconv(milliseconds) {
        let seconds = Math.floor(milliseconds / 1000);

        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;

        let formattedTime = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(remainingSeconds);
        return formattedTime;
    }

    function padZero(number) {
        return number < 10 ? "0" + number : number;
    }
</script>

<!-- <input type="datetime-local" bind:value/> -->

<div class="time_container text-white text-5xl flex flex-col items-end tracking-tight {result < 0 ? 'mb-4' : ''}">
    <span>The stream will begin {@html result > 0 ? "in: " : "soon."}</span>

    {#if result > 0}
        <span class="time text-9xl tracking-tighter">{timeconv(result)}</span>
    {/if}
</div>

<style>
    .time_container {
        font-weight: bold;
    }
</style>