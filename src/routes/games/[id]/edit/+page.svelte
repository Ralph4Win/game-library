<script>
    export let data;
    let game = data.game;
    let platforms = data.platforms;

    let genres = [
        "Action", "Adventure", "RPG", "Shooter", "Puzzle", "Platformer", "Strategy", "Racing", "Simulation", "Sports", "Horror", "Fighting", "Indie", "Other"
    ];

    // local variable for dynamic slider display
    let ratingValue = game.rating;
</script>

<h1>Edit Game</h1>

<form method="POST">
    <div>
        <label for="title">Title: <span style="color: red">*</span></label>
        <input id="title" name="title" type="text" value={game.title} required />
    </div>

    <div>
        <label for="genre">Genre: <span style="color: red">*</span></label>
        <select id="genre" name="genre" required>
            <option value="" disabled>Select genre</option>
            {#each genres as g}
                <option value={g} selected={game.genre === g}>{g}</option>
            {/each}
        </select>
    </div>

    <div>
        <label for="platform">Platform: <span style="color: red">*</span></label>
        <select id="platform" name="platform" required>
            <option value="" disabled>Select platform</option>
            {#each platforms as p}
                <option value={p.name} selected={game.platform === p.name}>{p.name}</option>
            {/each}
        </select>
    </div>

    <div>
        <label for="rating">Rating: {ratingValue}</label>
        <input 
            id="rating" 
            name="rating" 
            type="range" 
            min="1" 
            max="10" 
            step="0.1" 
            bind:value={ratingValue} 
        />
    </div>

    <div>
        <label>
            <input type="checkbox" name="played" checked={game.played} />
            Played
        </label>
    </div>

    <div>
        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments">{game.comments}</textarea>
    </div>

    <div>
        <label for="image">Image URL (optional):</label>
        <input id="image" name="image" type="text" value={game.image} />
    </div>

    <div>
        <button type="submit">Save Changes</button>
    </div>
</form>

<a href={`/games/${game._id}`}>← Back to Game</a>

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
