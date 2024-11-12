<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { faHome } from '@fortawesome/free-solid-svg-icons';

	import Button from '$lib/ui/Button.svelte';
	import Typewriter from 'svelte-typewriter';

    import Astro from '$lib/images/giphy.gif'

	$: message = $page?.status === 404 ? "$~: Woow, I think you're lost, but don't worry, I'll help you find your way back home." : "$~: Oops, something went wrong, but don't worry, I'll help you find your way back home.";
	let interval = 40;

	let show = false;
	setTimeout(() => (show = true), "$~: Woow, I think you're lost, but don't worry, I'll help you find your way back home.".length * interval + 1000 || 5000);
</script>

<main>
    <div class="main" />

    <img width="250" src={Astro} alt="?">

    <h1 class="status">
        {$page.status}
    </h1>

    <p class="oops">
        <Typewriter keepCursorOnFinish interval={40}>
            {message}
        </Typewriter>
    </p>

    <div class="dino" class:show>
        <Button
            href="/"
            hrefReplace={true}
            icon={faHome}
            color="greenyellow"
            textColor="black"
        >Go back to the Lobby</Button>
    </div>
</main>

<style>
	main {
		background-color: #000;

        color: white;
	}

	.main {
		position: fixed;
		top: 50%;
		left: 50%;
		height: 1px;
		width: 1px;
		background-color: #fff;
		border-radius: 50%;
		box-shadow: -42vw -4vh 0px 0px #fff, 25vw -41vh 0px 0px #fff, -20vw 49vh 0px 1px #fff,
			5vw 40vh 1px 1px #fff, 29vw 19vh 1px 0px #fff, -44vw -13vh 0px 0px #fff,
			46vw 41vh 0px 1px #fff, -3vw -45vh 0px 1px #fff, 47vw 35vh 1px 0px #fff,
			12vw -8vh 1px 0px #fff, -34vw 48vh 1px 1px #fff, 32vw 26vh 1px 1px #fff,
			32vw -41vh 1px 1px #fff, 0vw 37vh 1px 1px #fff, 34vw -26vh 1px 0px #fff,
			-14vw -49vh 1px 0px #fff, -12vw 45vh 0px 1px #fff, -44vw -33vh 0px 1px #fff,
			-13vw 41vh 0px 0px #fff, -36vw -11vh 0px 1px #fff, -23vw -24vh 1px 0px #fff,
			-38vw -27vh 0px 1px #fff, 16vw -19vh 0px 0px #fff, 28vw 33vh 1px 0px #fff,
			-49vw -4vh 0px 0px #fff, 16vw 32vh 0px 1px #fff, 36vw -18vh 1px 0px #fff,
			-25vw -30vh 1px 0px #fff, -23vw 24vh 0px 1px #fff, -2vw -35vh 1px 1px #fff,
			-25vw 9vh 0px 0px #fff, -15vw -34vh 0px 0px #fff, -8vw -19vh 1px 0px #fff,
			-20vw -20vh 1px 1px #fff, 42vw 50vh 0px 1px #fff, -32vw 10vh 1px 0px #fff,
			-23vw -17vh 0px 0px #fff, 44vw 15vh 1px 0px #fff, -40vw 33vh 1px 1px #fff,
			-43vw 8vh 0px 0px #fff, -48vw -15vh 1px 1px #fff, -24vw 17vh 0px 0px #fff,
			-31vw 50vh 1px 0px #fff, 36vw -38vh 0px 1px #fff, -7vw 48vh 0px 0px #fff,
			15vw -32vh 0px 0px #fff, 29vw -41vh 0px 0px #fff, 2vw 37vh 1px 0px #fff,
			7vw -40vh 1px 1px #fff, 15vw 18vh 0px 0px #fff, 25vw -13vh 1px 1px #fff,
			-46vw -12vh 1px 1px #fff, -18vw 22vh 0px 0px #fff, 23vw -9vh 1px 0px #fff,
			50vw 12vh 0px 1px #fff, 45vw 2vh 0px 0px #fff, 14vw -48vh 1px 0px #fff, 23vw 43vh 0px 1px #fff,
			-40vw 16vh 1px 1px #fff, 20vw -31vh 0px 1px #fff, -17vw 44vh 1px 1px #fff,
			18vw -45vh 0px 0px #fff, 33vw -6vh 0px 0px #fff, 0vw 7vh 0px 1px #fff,
			-10vw -18vh 0px 1px #fff, -19vw 5vh 1px 0px #fff, 1vw 42vh 0px 0px #fff,
			22vw 48vh 0px 1px #fff, 39vw -8vh 1px 1px #fff, -6vw -42vh 1px 0px #fff,
			-47vw 34vh 0px 0px #fff, -46vw 19vh 0px 1px #fff, -12vw -32vh 0px 0px #fff,
			-45vw -38vh 0px 1px #fff, -28vw 18vh 1px 0px #fff, -38vw -46vh 1px 1px #fff,
			49vw -6vh 1px 1px #fff, -28vw 18vh 1px 1px #fff, 10vw -24vh 0px 1px #fff,
			-5vw -11vh 1px 1px #fff, 33vw -8vh 1px 0px #fff, -16vw 17vh 0px 0px #fff,
			18vw 27vh 0px 1px #fff, -8vw -10vh 1px 1px #fff;

		box-shadow: 24vw 9vh 1px 0px #fff, 12vw -24vh 0px 1px #fff, -45vw -22vh 0px 0px #fff,
			-37vw -40vh 0px 1px #fff, 29vw 19vh 0px 1px #fff, 4vw -8vh 0px 1px #fff,
			-5vw 21vh 1px 1px #fff, -27vw 26vh 1px 1px #fff, -47vw -3vh 1px 1px #fff,
			-28vw -30vh 0px 1px #fff, -43vw -27vh 0px 1px #fff, 4vw 22vh 1px 1px #fff,
			36vw 23vh 0px 0px #fff, -21vw 24vh 1px 1px #fff, -16vw 2vh 1px 0px #fff,
			-16vw -6vh 0px 0px #fff, 5vw 26vh 0px 0px #fff, -34vw 41vh 0px 0px #fff, 1vw 42vh 1px 1px #fff,
			11vw -13vh 1px 1px #fff, 48vw -8vh 1px 0px #fff, 22vw -15vh 0px 0px #fff,
			45vw 49vh 0px 0px #fff, 43vw -27vh 1px 1px #fff, 20vw -2vh 0px 0px #fff, 8vw 22vh 0px 1px #fff,
			39vw 48vh 1px 1px #fff, -21vw -11vh 0px 1px #fff, -40vw 45vh 0px 1px #fff,
			11vw -30vh 1px 0px #fff, 26vw 30vh 1px 0px #fff, 45vw -29vh 0px 1px #fff,
			-2vw 18vh 0px 0px #fff, -29vw -45vh 1px 0px #fff, -7vw -27vh 1px 1px #fff,
			42vw 24vh 0px 0px #fff, 45vw -48vh 1px 0px #fff, -36vw -18vh 0px 0px #fff,
			-44vw 13vh 0px 1px #fff, 36vw 16vh 0px 1px #fff, 40vw 24vh 0px 0px #fff,
			18vw 11vh 0px 0px #fff, -15vw -23vh 1px 0px #fff, -24vw 48vh 0px 1px #fff,
			27vw -45vh 1px 0px #fff, -2vw -24vh 0px 1px #fff, -15vw -28vh 0px 0px #fff,
			-43vw 13vh 1px 0px #fff, 7vw 27vh 1px 0px #fff, 47vw 5vh 0px 0px #fff, -45vw 15vh 1px 1px #fff,
			-5vw -28vh 0px 1px #fff, 38vw 25vh 1px 1px #fff, -39vw -1vh 1px 0px #fff, 5vw 0vh 1px 0px #fff,
			49vw 13vh 0px 0px #fff, 48vw 10vh 0px 1px #fff, 19vw -28vh 0px 0px #fff, 4vw 7vh 0px 0px #fff,
			21vw 21vh 1px 1px #fff, -15vw -15vh 0px 1px #fff, -6vw -42vh 1px 0px #fff,
			-15vw 48vh 1px 1px #fff, -23vw 25vh 1px 1px #fff, -48vw 25vh 0px 1px #fff,
			-31vw -19vh 0px 1px #fff, 4vw 37vh 1px 1px #fff, -43vw 28vh 0px 0px #fff,
			3vw -25vh 0px 1px #fff, -39vw 14vh 0px 1px #fff, -40vw 31vh 0px 1px #fff,
			35vw -36vh 1px 1px #fff, 16vw 49vh 0px 0px #fff, 6vw 39vh 0px 0px #fff, 3vw -35vh 0px 1px #fff,
			-44vw -2vh 1px 0px #fff, -6vw 21vh 1px 0px #fff, 48vw 9vh 1px 1px #fff,
			-43vw 30vh 1px 1px #fff, 29vw -12vh 1px 1px #fff, -48vw 13vh 1px 0px #fff,
			-42vw 32vh 1px 1px #fff, 34vw 15vh 1px 1px #fff, 29vw -37vh 1px 1px #fff,
			28vw 2vh 0px 0px #fff;
		animation: zoom 16s alternate infinite;
	}

	@keyframes zoom {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.5);
		}
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	.dino {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		opacity: 0;
	}

	.dino.show {
		animation: show 1s ease-in-out forwards;
	}

	@keyframes show {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	.oops {
		padding: 1rem;
		border-radius: 15px;
		color: greenyellow;

        background-color: rgba(0, 0, 0, 0.227);

        backdrop-filter: blur(10px);
    }

	/* .spin {
		font-family: 'Cubano';
		font-weight: 700;
		font-size: 5rem;
		width: fit-content;
		animation: spin 2s infinite linear;
	} */

    .status {
        font-family: 'Cubano';
        font-weight: 700;
        font-size: 4rem;
    }

	h1 {
		margin: 0;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		50% {
			transform: rotate(180deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	p {
		font-family: 'Fira Code', monospace !important;
	}

	:global(p *) {
		font-family: 'Fira Code', monospace !important;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		min-height: 100vh;
	}
</style>
