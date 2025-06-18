<script lang="ts">
	type Props = {
		dialog: HTMLDialogElement;
		highlight: Color;
	};

	const colors: Color[] = ['yellow', 'green', 'pink', 'purple', 'blue', 'grey', 'charcoal'];

	const timeout = 500;

	let { dialog = $bindable(), highlight = $bindable() }: Props = $props();

	const updateColor = async (color: Color) => {
		highlight = color;
		await new Promise((resolve) => setTimeout(resolve, timeout));
		dialog.close();
	};
</script>

<dialog class="note--dialog" bind:this={dialog}>
	<div class="note--dialog--colors">
		{#each colors as color}
			<button
				onclick={() => {
					updateColor(color);
				}}
				aria-label={color}
				data-active={color === highlight}
				data-color={color}
			>
			</button>
		{/each}
	</div>
</dialog>
