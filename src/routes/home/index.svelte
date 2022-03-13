<script lang="ts">
	import type { TweetType } from '$root/types/index'
	import Tweet from '$root/components/tweet.svelte'
	import Compose from '$root/components/compose.svelte'
	export let tweets: TweetType[] = []
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Feed</h1>
<Compose />
{#each tweets as tweet (tweet.id)}
	<Tweet {tweet} />
{/each}

<style>
	h1 {
		position: sticky;
		top: 0;
		padding: var(--spacing-8) var(--spacing-24);
		font-size: var(--font-24);
		backdrop-filter: blur(100px);
	}
</style>
