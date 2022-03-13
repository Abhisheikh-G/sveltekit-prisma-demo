<script>
	export let item
</script>

{item}
<form action="/api" method="post">
	<input type="text" name="item" id="item" />
	<button type="submit" class="btn">submit</button>
</form>
