<script>
	// @ts-nocheck

	import Fa from 'svelte-fa';

	// @ts-nocheck

	import './ui.css';

	export let color;
	export let placeholderTextColor;
	export let textColor = "black";
	export let icon;

	export let name;
	export let placeholder = 'Enter text...';
	export let tip = name || placeholder;

	export let replace = function(s) {
		return s;
	}

	export let value;
	$: if (value) value = replace(value);

	export let input;

	export let pattern = /.*/;
	export let valid = true;
	$: incorrect = !pattern.test(value);
	$: valid = value && typeof value === 'string' && value.trim() === "" || !incorrect;

	export let cols = 3;

    export let disabled = false, rich = false;

    import tippy from 'sveltejs-tippy';
</script>

<main class="ui-input-wrapper" class:incorrect={incorrect && value && value.trim() !== ""}>
	{#if name}
		<p>{name}</p>
	{/if}

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="input" class:disabled on:click={() => input.focus()} use:tippy={{
        content: tip,
        allowHTML: true,
        placement: 'right'
    }}
	style="
		--color: {color};
		--placeholder-color: {placeholderTextColor};
		--text-color: {textColor};"
	>
		{#if icon}
			<div class="icon">
				<Fa {icon} />
			</div>
		{/if}

		{#if rich}
			<textarea {cols} bind:this={input} {disabled} bind:value {placeholder} />
		{:else}
		<input bind:this={input} {disabled} type="text" bind:value {placeholder} />
		{/if}
	</div>
</main>

<style>
	:root {
		--spacing: 10px;

		--placeholder-color: rgb(179, 179, 179);
		--text-color: white;
		--color: transparent;
		--caret-color: #007aff;
	}

	* {
		transition: all 0.2s;
	}

	.ui-input-wrapper {
		margin-bottom: 8px;
		width: 100%;
	}

	.input {
		padding: var(--spacing);
		border-radius: 8px;
		transition: all 0.2s;
		/* box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1); */

		border: 1px solid #eaeaea;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

	}

    .disabled {
        cursor: not-allowed;
        background-color: #f5f5f5;
    }

	.input,
	textarea, input {
		cursor: text !important;
		color: var(--text-color);
	}

	textarea::placeholder, input::placeholder {
		color: var(--placeholder-color);
	}

	textarea, input {
		outline: none;
		border: none;
		background: none;

		width: 100% !important;

		/* resize: none; */

        caret-color: var(--caret-color);

		font-family: Inter, sans-serif;
	}

    textarea::placeholder, input::placeholder {
        color: rgb(179, 179, 179);
    }

	p {
		margin: 0;
        margin-left: 5px;
        margin-bottom: 5px;
        font-size: 16px;
        color: rgb(88, 88, 88);

        font-family: Inter, sans-serif;
	}

	.icon {
		margin: calc(var(--spacing) / 2);
		margin-right: calc(var(--spacing) / 1);
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;

        color: rgb(179, 179, 179);
	}

	.incorrect .input {
		border-color: #ff3b30;
	}

	.incorrect p {
		color: #ff3b30;
	}
</style>
