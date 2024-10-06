<script>
	import { faHeart } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
</script>

<div class="container skillbox" data-aos="flip-right" data-aos-duration="1200">
	<h1><Fa icon={faHeart} /> Why CODIHA?</h1>
	<p class="description">
		CODIHA is where you collaborate on projects, gain hands-on experience,
		and connect with peers from different universities. It's a place to
		build your skills, earn certifications after each workshop, and share
		knowledge in a supportive community, helping you grow beyond the limits
		of a typical classroom.
	</p>
</div>

<br />

<style>
	embed {
		width: 100%;
		max-width: var(--mw);
		margin: 20px auto;
		display: block;
	}

	:global(.colored) {
		color: var(--accent);
	}

	:global(.tooltip) {
		margin: 0;
		font-family: "Inter", sans-serif;
		font-size: 15px;
		font-weight: 500;
		color: white;
	}

	.icon {
		position: relative;
		width: fit-content;
	}

	.icon *:not(.blur) {
		z-index: 2;
	}

	.blur {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.7;
		animation: blur 3s infinite;
	}

	@keyframes blur {
		0% {
			filter: blur(0px);
		}

		50% {
			filter: blur(20px);
		}

		100% {
			filter: blur(0px);
		}
	}

	.container p {
		margin: 0;
	}

	.skillbox {
		width: 100%;
		max-width: var(--mw);
		padding: 20px;
		padding-bottom: 0;
		margin-bottom: 0;
		text-align: center;
	}

	.skillbox h1 {
		margin-bottom: 10px;
	}

	.skillbox .description {
		margin-bottom: 20px;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.skill {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10px;
	}

	.skill i {
		font-size: 50px;
	}
</style>
