<script>
	import Links from "$lib/components/Links.svelte";

	import { faBrain, faChain } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	import tippy from "sveltejs-tippy";

	let skills = [
		{
			name: "HTML",
			icon: "html5",
		},
		{
			name: "CSS",
			icon: "css3",
		},
		{
			name: "JavaScript",
			icon: "javascript",
		},

		{
			name: "ReactJS",
			icon: "react",
		},

		{
			name: "Svelte",
			icon: "svelte",
		},

		{
			name: "GitHub",
			icon: "github",
			colorless: true,
		},

		{
			name: "C",
			icon: "c",
		},

		{
			name: "Python",
			icon: "python",
		},
		{
			name: "GoLang",
			icon: "go-original-wordmark",
			notPlain: true,
		},

		{
			name: "Java",
			icon: "java",
		},

		{
			name: "Arduino",
			icon: "arduino",
		},

		{
			name: "Linux",
			icon: "linux",
			invert: true,
		},
	];
</script>

<div class="container skillbox" data-aos="flip-right" data-aos-duration="1200">
	<h1><Fa icon={faBrain} /> What we teach</h1>
	<p class="description">
		The CODIHA Club teaches a variety of programming languages and tools
		that are essential for any developer.
	</p>

	<br />

	<div class="skills">
		{#each skills as skill, i}
			<div
				class="skill"
				data-aos="fade-right"
				data-aos-duration={(i * 20).toString() + "ms"}
			>
				<div
					class="icon"
					use:tippy={{
						content: `<p class="tooltip">${skill.name}</p>`,
						allowHTML: true,
						placement: "top",
					}}
				>
					<div style={skill.invert ? "filter: invert()" : ""}>
						<i
							class={`icon devicon-${skill.icon}${skill.notPlain ? "" : "-plain"} ${
								typeof skill.colorless === "undefined"
									? "colored"
									: ""
							} `}
						/>
						<i
							class={`icon devicon-${skill.icon}${skill.notPlain ? "" : "-plain"} ${
								typeof skill.colorless === "undefined"
									? "colored"
									: ""
							} blur`}
						/>
					</div>
				</div>
				<!-- <h2>{skill.name}</h2> -->
			</div>
		{/each}
	</div>
</div>

<iframe
	width="100%"
	style="aspect-ratio: 16/9; max-width: calc(var(--mw) / 1.5);"
	src="https://www.youtube.com/embed/NtfbWkxJTHw?si=hzP3aqL5ACM-xrZD"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>

<style>
	embed {
		width: 100%;
		max-width: var(--mw);
		margin: 20px auto;
		display: block;
	}

	:global(embed > g) {
		font-family: Cubano, sans-serif !important;
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
		max-width: calc(var(--mw) * 0.7);
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
