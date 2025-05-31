<script>
  import { invalidate } from '$app/navigation';
  let { data } = $props();

  async function deletePlatform(id) {
    await fetch(`?/delete`, {
      method: 'POST',
      body: new FormData().append('id', id)
    });
    await invalidate();
  }
</script>

<a href="/">Back</a>
<h1>Platforms</h1>

<ul>
  {#each data.platforms as platform}
    <li>
      {platform.name} ({platform.manufacturer})
      <form method="POST" action="?/delete" style="display: inline;">
        <input type="hidden" name="id" value={platform._id} />
        <button type="submit" class="btn btn-sm btn-danger">Delete</button>
      </form>
    </li>
  {/each}
</ul>

<a href="/platforms/new" class="btn btn-primary mt-3">Add New Platform</a>
