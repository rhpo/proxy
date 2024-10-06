<script>
	import Links from '$lib/components/Links.svelte';

	import { faChain } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<div class="container linkbox" data-aos="flip-right" data-aos-duration="1200">
	<h1><Fa icon={faChain} /> Social Links</h1>
	<p class="description">You can contact me via one of those links...</p>

	<div class="clink">
		<Links />
	</div>
</div>

<style>

	.linkbox {
		text-align: center;
	}

	@media screen and (max-width: 1300px) {
		.linkbox {
			width: 100%;
		}

		.linkbox h1 {
			font-size: 1.8rem;
		}

		.linkbox .clink {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
		}

		:root {
			--space: 1rem;
			--nav: 80px;
		}

		:global(.row) {
			display: flex !important;
			flex-direction: row;
			justify-content: center;
			align-items: center;

            max-width: 650px;
		}
	}

	@media screen and (max-width: 1300px) {
		:global(.row) {
			flex-direction: column;
			width: 100%;
		}
	}

    .clink {
		display: flex;
		gap: 1rem;
	}
</style>
