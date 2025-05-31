<script>
    export let data;
    let game = data.game;

    function confirmDelete(event) {
        const confirmed = confirm("Do you really want to delete this game?");
        if (confirmed) {
            event.target.submit();
        } else {
            // Cancel delete
        }
    }
</script>

<h1>{game.title}</h1>

<div class="game-detail">
    <div class="game-image">
        <img src={game.image} alt={game.title} />
    </div>
    <div class="game-info">
        <p><strong>Genre:</strong> {game.genre}</p>
        <p><strong>Platform:</strong> {game.platform}</p>
        <p><strong>Rating:</strong> {game.rating}</p>
        <p><strong>Played:</strong> {game.played ? "Yes" : "No"}</p>
        <p><strong>Comments:</strong> {game.comments ? game.comments : "No comments yet."}</p>

        <!-- Delete game with confirm -->
        <form method="POST" action="?/delete" on:submit|preventDefault={confirmDelete}>
            <button type="submit" class="delete-button">Delete Game</button>
        </form>

        <!-- Edit button -->
        <a href={`/games/${game._id}/edit`}>
            <button class="edit-button">Edit Game</button>
        </a>
    </div>
</div>

<a href="/games">← Back to Games</a>

<style>
    .game-detail {
        display: flex;
        gap: 2rem;
        margin-bottom: 2rem;
        align-items: flex-start;
    }

    .game-image img {
        max-width: 300px;
        border-radius: 8px;
    }

    .game-info {
        flex: 1;
    }

    .delete-button {
        padding: 0.7rem 1.5rem;
        background-color: #dc3545;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 4px;
        margin-top: 1rem;
    }

    .delete-button:hover {
        background-color: #c82333;
    }

    .edit-button {
        padding: 0.7rem 1.5rem;
        background-color: #ffc107;
        color: black;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 4px;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    .edit-button:hover {
        background-color: #e0a800;
    }
</style>
