<script>
    let { form } = $props();
</script>

<a href="/platforms">Back</a>
<h1>Add a Platform</h1>
<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input name="name" class="form-control" type="text" required />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Manufacturer</label>
        <input name="manufacturer" class="form-control" type="text" />
    </div>
    <button type="submit" class="btn btn-primary">Add Platform</button>
</form>

{#if form?.success}
    <p>Platform created</p>
{/if}
