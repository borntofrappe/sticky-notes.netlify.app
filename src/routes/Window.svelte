<script lang="ts">
	import Dialog from './Dialog.svelte';

	type Props = {
		open: boolean;
		text: string;
		highlight: Color;
	};

	let {
		open = $bindable(false),
		text = $bindable(''),
		highlight = $bindable('yellow')
	}: Props = $props();

	// svelte-ignore non_reactive_update
	let dialog: HTMLDialogElement;
	const openMenu = () => {
		dialog.showModal();
	};
</script>

<article class="note" hidden={!open} data-color={highlight}>
	<Dialog bind:dialog bind:highlight />

	<nav class="note--start" aria-label="Menu note">
		<button onclick={openMenu} aria-label="Menu" class="icon-button" data-anchor="bottom">
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle cx="12" cy="12" r="1" />
				<circle cx="19" cy="12" r="1" />
				<circle cx="5" cy="12" r="1" />
			</svg>
		</button>

		<button
			onclick={() => {
				open = false;
			}}
			aria-label="Close note"
			class="icon-button"
			data-anchor="bottom right"
		>
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M18 6 6 18" />
				<path d="m6 6 12 12" />
			</svg>
		</button>
	</nav>

	<div
		tabindex="0"
		role="textbox"
		bind:innerHTML={text}
		contenteditable="true"
		class="note--mid note--editor"
		placeholder="Take a note..."
		spellcheck="false"
	></div>
</article>
