<script>
    // @ts-nocheck

	import { faX } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { blur } from "svelte/transition";

    export let carts = [];

    let opened = false;
    function close() {
        opened = false;
    }
</script>

{#if opened}
    <div class="overlay" transition:blur>


        <section class="cart-wrap">
            <div class="nav">

                <h1>SocialGYM - Cart</h1>

                <button class="close" on:click={close}>
                    <Fa icon={faX}></Fa>
                </button>

            </div>

            <div class="cart">
                {#each carts as cart}
                    <div class="cart-item">
                        <div class="cart-item-img">
                            <img src={cart.image} alt={cart.name} />
                        </div>
                        <div class="cart-item-info">
                            <h1>{cart.name}</h1>
                            <p>{cart.description}</p>
                        </div>
                        <div class="cart-item-price">
                            <h1>{cart.price}</h1>
                        </div>
                    </div>
                {/each}
        </section>


    </div>
{/if}
