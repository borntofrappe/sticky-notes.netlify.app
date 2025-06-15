<script lang="ts">
	import '../app.css';

	import LastModified from './LastModified.svelte';
	import Window from './Window.svelte';

	const today = new Date();
	today.setHours(9);
	const notes: Note[] = $state([
		{
			text: '<em>When a man has a grievance, he feels drawn to those who will hear him patiently and symphatise</em>',
			highlight: 'pink',
			lastModified: today.toString(),
			open: true
		},
		{
			text: '<ul><li>app release <u>for Windows</u></li><li>landing page</li><li>world domination</li></ul>',
			highlight: 'blue',
			lastModified: 'Sat Jun 07 2025 18:26:28 GMT+0200 (Central European Summer Time)',
			open: false
		},
		{
			text: '<b>Prime beef steak!</b><br>But do I have enough fillets du beef?',
			highlight: 'yellow',
			lastModified: 'Mon May 12 2025 18:25:51 GMT+0200 (Central European Summer Time)',
			open: true
		}
	]);
</script>

<div class="app">
	<main class="notes-list">
		<h1>Sticky notes</h1>
		{#each notes as note}
			<div class="notes-list--note" class:open={note.open} data-color={note.highlight}>
				<LastModified dateString={note.lastModified} />
				<div>{@html note.text}</div>
			</div>
		{/each}
	</main>

	{#each notes as note}
		<Window bind:open={note.open} bind:text={note.text} highlight={note.highlight} />
	{/each}
</div>
