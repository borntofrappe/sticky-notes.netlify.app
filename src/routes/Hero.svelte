<div class="layout">
	<div class="center">
		<div class="grid">
			<figure>
				<img src="/icon.svg" alt="" width="52" height="52" />
			</figure>
			<h1>Sticky notes</h1>
			<p>Gabriele Corti</p>
			<p>Utilities & tools</p>
		</div>
		<p>Take notes in cute little frames.</p>
		<div class="row">
			<a class="button primary" href="/sticky-notes.exe" download="sticky-notes.exe"
				>Download for Windows</a
			>
			<a class="button" href="#app">Try a short time</a>
		</div>
	</div>
</div>

<style>
	.layout {
		padding-block: 25svb;
		background: linear-gradient(var(--color-surface-0), var(--color-surface--1));
	}

	figure {
		padding: 12px;
		background: var(--color-surface-1);
		border-radius: 4px;

		img {
			width: 48px;
			height: 48px;
			display: block;
		}
	}

	.grid {
		display: inline-grid;
		gap: var(--whitespace-1) var(--whitespace-3);
		grid-template-areas: 'figure title' 'figure author' 'figure keywords';
		align-items: center;

		figure {
			grid-area: figure;
		}

		h1 {
			grid-area: title;
			font-size: 1.35em;
			font-weight: 600;
		}

		p {
			font-size: 0.85em;
		}

		p:nth-of-type(1) {
			grid-area: author;
		}

		p:nth-of-type(2) {
			grid-area: keywords;
		}
	}

	.row {
		display: flex;
		gap: var(--whitespace-3);
		flex-wrap: wrap;
		align-items: cemter;
	}
</style>
