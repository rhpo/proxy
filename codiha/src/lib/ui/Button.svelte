<script>
	// @ts-nocheck

	import Fa from 'svelte-fa';

	// @ts-nocheck

	import './ui.css';
	import { faSpinner } from '@fortawesome/free-solid-svg-icons';

	export let onClick = () => {};
	export let type = 'primary';
	export let color;
	export let textColor;
	export let icon;

	export let htmltype = 'button';

	export let fullw = false;
	export let spaceless = false;

	export let href;

	export let hrefReplace = false;

	export let loader = false;

	let button = {
		innerText: ''
	};

	$: empty = button.innerText.trim().length <= 0;

	$: loading = loader;
</script>

{#if href}
	<a {href} target={hrefReplace ? '_self' : '_blank'}
	rel="noopener noreferrer"
	on:click={() => {
		if (!loading) {
			onClick();
		}

		if (loader) loading = true;
	}}
	bind:this={button}
	class:primary={type === 'primary'}
	class:fullw
	class:spaceless
	class:notempty={!empty}
	class:secondary={type === 'secondary'}
	class:third={type === 'third'}
	class:warning={type === 'warning'}
	class:danger={type === 'danger'}
	style={`${textColor ? `color: ${textColor};` : ''} ${
		color ? `background-color: ${color};` : ''
	}`}>
		{#if icon}
			<div class="icon" class:space={!empty}>
				<Fa {icon} color={textColor} />
			</div>
		{/if}<slot /></a
	>
{:else}
	<button
		type={htmltype}
		on:click={() => {
			if (!loading) {
				onClick();
			}

			if (loader) loading = true;
		}}
		bind:this={button}
		class:primary={type === 'primary'}
		class:fullw
		class:spaceless
		class:notempty={!empty}
		class:secondary={type === 'secondary'}
		class:third={type === 'third'}
		class:warning={type === 'warning'}
		class:danger={type === 'danger'}
		style={`${textColor ? `color: ${textColor};` : ''} ${
			color ? `background-color: ${color};` : ''
		}`}
	>
		{#if loading}
			<Fa icon={faSpinner} spin />
		{:else}
			{#if icon}
				<div class="icon">
					<Fa {icon} />
				</div>
			{/if}{#if !empty}&nbsp;{/if}<slot />
		{/if}
	</button>
{/if}

<style>
	button, a {
		border: none;
		background: none;
		cursor: pointer;
		outline: none;
		padding: 8px;
		border-radius: 8px;
		font-weight: 600;
		user-select: none;
		transition: all 0.2s;
		box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: center;
		align-items: center;

		white-space: nowrap;

		margin-bottom: 8px;
	}

	.spaceless {
		margin: 0;
	}

	.notempty {
		padding-right: 12px;
	}

	.fullw {
		width: 100%;
	}

	a {
		white-space: nowrap;
		display: flex;
		align-items: center;
	}

	.icon {
		margin-right: 4px;
		margin-left: 4px;
	}

	.icon.space {
		margin-right: 8px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button:hover, a:hover {
		filter: brightness(0.9);
		transform: scale(1.05);
	}

	button:active, a:active {
		filter: brightness(0.8);
		transform: scale(0.95);
	}

	.primary {
		background-color: rgb(59 130 246/0.5);
		color: #1e3a8a;
	}

	.secondary {
		background-color: #e0e0e0;
		border: 1px solid #cacaca;
		color: black;
	}

	.third {
		background-color: #ffffff;
		color: #1e88e5;
	}

	.warning {
		background-color: #ff9800;
		color: #ffffff;
	}

	.danger {
		background-color: #f44336;
		color: #ffffff;
	}
</style>
