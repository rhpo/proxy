<script>
	// @ts-nocheck

	import hero from "$lib/images/hero.webp";

	import def from "$lib/images/cursors/default.png";
	import pointer from "$lib/images/cursors/pointer.png";
	import text from "$lib/images/cursors/text.png";
	import interdit from "$lib/images/cursors/not-allowed.png";
	import Hero from "$lib/pages/Hero.svelte";
	import SLink from "$lib/pages/SLink.svelte";
	import SNotify from "$lib/pages/SNotify.svelte";
	import WhatTeach from "$lib/pages/WhatTeach.svelte";
	import Why from "$lib/pages/Why.svelte";

	import icon from "$lib/images/icon.jpg";
	import GetStarted from "$lib/pages/GetStarted.svelte";
</script>

<svelte:head>
	<!-- icon -->
	<link rel="icon" href={icon} />
</svelte:head>

<main
	style="--image: url({hero}); --default: url({def}); --pointer: url({pointer}); --text: url({text}); --interdit: url({interdit});"
>
	<div class="autosize">
		<Hero />
		<Why />
		<WhatTeach />
		<br />
		<GetStarted />
		<br />
		<br />
		<SLink />

		<br />
		<br />

		<!-- <SNotify /> -->
	</div>
</main>

<style>
	:root {
		--shadow: white;
		--mw: 800px;

		--text-shadow: rgb(59 130 246);
	}

	:global(.container) {
		margin-bottom: 50px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	:global(.container h1) {
		margin: 0;
		animation: glow 2s infinite;
	}

	@keyframes glow {
		0% {
			text-shadow: 0 0 0 var(--text-shadow);
		}

		50% {
			text-shadow: 0 0 10px var(--text-shadow);
		}

		100% {
			text-shadow: 0 0 0 var(--text-shadow);
		}
	}

	:global(.container p) {
		margin-top: 15px;
		margin-bottom: 30px;
		font-family: "Inter", sans-serif;
	}

	:global(main) {
		cursor: var(--default), auto;
	}

	:global(
			main p,
			main h1,
			main h2,
			main h3,
			main h4,
			main h5,
			main h6,
			main span,
			main input,
			main textarea
		) {
		cursor: var(--text), auto;
	}

	:global(
			main button,
			main input[type="button"],
			main input[type="submit"],
			main input[type="reset"],
			main a,
			main button *,
			main input[type="button"] *,
			main input[type="submit"] *,
			main input[type="reset"] *,
			main a *
		) {
		cursor: var(--pointer), auto !important;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		min-height: 100vh;
		width: 100%;

		padding-top: var(--nav);
	}

	.autosize {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		width: 100%;
		max-width: var(--width);

		padding: var(--space);
	}

	@keyframes flipping {
		0% {
			transform: rotateY(0deg);
		}

		50% {
			transform: rotateY(180deg);
		}

		100% {
			transform: rotateY(0deg);
		}
	}

	@media screen and (max-width: 760px) {
		main {
			width: 100%;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
</style>
