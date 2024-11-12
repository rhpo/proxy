<script>
// @ts-nocheck

	import { blur, fade, scale } from "svelte/transition";
	import Button from "./Button.svelte";
	import { browser } from "$app/environment";
	import Fa from "svelte-fa";

    export let title = 'Alert';
    export let message = 'This is an alert message.';
    export let onClose = () => {};

    function mustTriggerTwice() {
            console.log("mustTriggerTwice")
            typeof onClose === 'function' && onClose();
    }

    export let isOpen = false;
    $: !isOpen && mustTriggerTwice();

    export let icon;

    $: if (browser) {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        document.body.style.overflowX = 'hidden';
    }
</script>

{#if isOpen}
    <div class="overlay" transition:blur>
        <div class="alert">
            <div class="alert-header">
                <h3>{#if icon}<Fa {icon} /> {/if}{title || 'Alert'}</h3>
                <!-- <button on:click={close}>&times;</button> -->
            </div>
            <div class="alert-body">
                <p>{message || 'This is an alert message.'}</p>
            </div>
            <div class="alert-footer">
                <Button type="primary" onClick={() => isOpen = !isOpen}>Got it, thanks!</Button>
                <slot></slot>
            </div>
        </div>
    </div>
{/if}

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);

        z-index: 999999;
    }

    .alert-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3, p {
        margin: 0;
    }

    h3 {
        font-weight: 500;
        color: black !important;
    }

    :global(h3 *) {
        color: black;
    }

    p {
        color: rgb(161, 161, 161);
        font-size: 16px;
    }

    :global(.alert > *:not(:last-child)) {
        margin-bottom: 15px;
    }

    .alert {
        max-width: 500px;
        min-height: 150px;

        width: 100%;

        background-color: white;
        border-radius: 16px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        margin: 15px;
        padding: 30px;

		box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);


        font-family: 'Inter', sans-serif;
    }
</style>
