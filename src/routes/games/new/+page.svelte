<script>
    export let data;
    let platforms = data.platforms;

    let genres = [
        "Action", "Adventure", "RPG", "Shooter", "Puzzle", "Platformer", "Strategy", "Racing", "Simulation", "Sports", "Horror", "Fighting", "Indie", "Other"
    ];

    let ratingValue = 5.0;
</script>

<h1>Add New Game</h1>

<form method="POST">
    <div>
        <label for="title">Title: <span style="color: red">*</span></label>
        <input id="title" name="title" type="text" required />
    </div>

    <div>
        <label for="genre">Genre: <span style="color: red">*</span></label>
        <select id="genre" name="genre" required>
            <option value="" disabled selected>Select genre</option>
            {#each genres as g}
                <option value={g}>{g}</option>
            {/each}
        </select>
    </div>

    <div>
        <label for="platform">Platform: <span style="color: red">*</span></label>
        <select id="platform" name="platform" required>
            <option value="" disabled selected>Select platform</option>
            {#each platforms as p}
                <option value={p.name}>{p.name}</option>
            {/each}
        </select>
    </div>

    <div>
        <label for="rating">Rating: {ratingValue}</label>
        <input id="rating" name="rating" type="range" min="1" max="10" step="0.1" value="5.0" on:input={(e) => ratingValue = e.target.value} />
    </div>

    <div>
        <label>
            <input type="checkbox" name="played" />
            Played
        </label>
    </div>

    <div>
        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments"></textarea>
    </div>

    <div>
        <label for="image">Image URL (optional):</label>
        <input id="image" name="image" type="text" />
    </div>

    <div>
        <button type="submit">Save Game</button>
    </div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 600px;
    }

    label {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    input[type="text"],
    select,
    textarea,
    input[type="range"] {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
    }

    textarea {
        min-height: 100px;
    }

    button {
        padding: 0.7rem 1.5rem;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 4px;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
