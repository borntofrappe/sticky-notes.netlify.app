<script lang="ts">
	import '../app.css';
	import site from '$lib/site';

	import App from './App.svelte';
	import Features from './Features.svelte';
	import Hero from './Hero.svelte';
</script>

<svelte:head>
	<title>{site.title}</title>
</svelte:head>

<Hero />
<App />
<Features />
