<script>
    export let text = '';

    let showFullText = false;

    function toggleText() {
        showFullText = !showFullText;
    }

    export let max = 250;
</script>

{#if text.length > max}
    {#if showFullText}
        <p>{text} <span on:click={toggleText}>(read less)</span></p>
    {:else}
        <p>{text.slice(0, max)}... <span on:click={toggleText}>(read more)</span></p>
    {/if}
{:else}
    <p>{text}</p>
{/if}

<style>
    p {
        margin: 0;
    }

    span {
        color: #007bff;
        cursor: pointer;
    }
</style>
