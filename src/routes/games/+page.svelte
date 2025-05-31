<script>
    export let data;
    let games = data.games;
    let platforms = Array.from(new Set(games.map(game => game.platform))).sort();

    let searchTerm = "";
    let selectedGenre = "";
    let selectedPlatform = "";
    let selectedPlayed = "";
    let showFilters = false;

    let sortField = "title";
    let sortAsc = true;

    let genres = [
        "Action", "Adventure", "RPG", "Shooter", "Puzzle", "Platformer", "Strategy", "Racing", "Simulation", "Sports", "Horror", "Fighting", "Indie", "Other"
    ];

    function toggleSort(field) {
        if (sortField === field) {
            sortAsc = !sortAsc;
        } else {
            sortField = field;
            sortAsc = true;
        }
    }

    $: filteredGames = games
        .filter(game =>
            game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&

            // genre filter - supports multiple genres (array or comma separated)
            (selectedGenre === "" ||
                (Array.isArray(game.genre) && game.genre.includes(selectedGenre)) ||
                (!Array.isArray(game.genre) && game.genre.split(",").map(g => g.trim()).includes(selectedGenre))
            ) &&

            // platform filter
            (selectedPlatform === "" || game.platform === selectedPlatform) &&

            // played filter
            (selectedPlayed === "" ||
                (selectedPlayed === "played" && game.played) ||
                (selectedPlayed === "notPlayed" && !game.played)
            )
        )
        .sort((a, b) => {
            let aVal = a[sortField];
            let bVal = b[sortField];

            if (typeof aVal === "string") {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (aVal < bVal) return sortAsc ? -1 : 1;
            if (aVal > bVal) return sortAsc ? 1 : -1;
            return 0;
        });
</script>

<h1>Games</h1>

<div class="top-bar">
    <div class="search-bar">
        <input
            type="text"
            placeholder="Search by title"
            bind:value={searchTerm}
        />
    </div>

    <div class="top-buttons">
        <button on:click={() => showFilters = !showFilters}>
            {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        <a href="/games/new">
            <button class="add-button">Add New Game</button>
        </a>
    </div>
</div>

{#if showFilters}
    <div class="filters">
        <div>
            <label>Genre:</label>
            <select bind:value={selectedGenre}>
                <option value="">All Genres</option>
                {#each genres as genre}
                    <option value={genre}>{genre}</option>
                {/each}
            </select>
        </div>

        <div>
            <label>Platform:</label>
            <select bind:value={selectedPlatform}>
                <option value="">All Platforms</option>
                {#each platforms as platform}
                    <option value={platform}>{platform}</option>
                {/each}
            </select>
        </div>

        <div>
            <label>Played:</label>
            <select bind:value={selectedPlayed}>
                <option value="">All Played Status</option>
                <option value="played">Played</option>
                <option value="notPlayed">Not Played</option>
            </select>
        </div>
    </div>
{/if}

<table>
    <thead>
        <tr>
            <th on:click={() => toggleSort("title")}>Title {sortField === "title" ? (sortAsc ? "↑" : "↓") : ""}</th>
            <th on:click={() => toggleSort("genre")}>Genre {sortField === "genre" ? (sortAsc ? "↑" : "↓") : ""}</th>
            <th on:click={() => toggleSort("platform")}>Platform {sortField === "platform" ? (sortAsc ? "↑" : "↓") : ""}</th>
            <th on:click={() => toggleSort("rating")}>Rating {sortField === "rating" ? (sortAsc ? "↑" : "↓") : ""}</th>
            <th on:click={() => toggleSort("played")}>Played {sortField === "played" ? (sortAsc ? "↑" : "↓") : ""}</th>
        </tr>
    </thead>
    <tbody>
        {#each filteredGames as game}
            <tr>
                <td><a href={`/games/${game._id}`}>{game.title}</a></td>
                <td>{game.genre}</td>
                <td>{game.platform}</td>
                <td>{game.rating}</td>
                <td>{game.played ? "Yes" : "No"}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
/* Dark table style */
table {
    width: 100%;
    border-collapse: collapse;
    color: #fff; /* white text */
}

th, td {
    border: 1px solid #444;
    padding: 0.5rem;
    text-align: left;
}

th {
    background-color: #222; /* dark gray header */
    cursor: pointer;
    user-select: none;
}

tbody tr:hover {
    background-color: #333; /* darker gray on hover */
}

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.search-bar {
    flex: 1;
}

.top-buttons {
    display: flex;
    gap: 1rem;
}

.filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.filters label {
    margin-right: 0.5rem;
    font-weight: bold;
}

input[type="text"],
select {
    padding: 0.5rem;
    font-size: 1rem;
    background-color: #222;
    color: #fff;
    border: 1px solid #444;
}

.add-button {
    padding: 0.7rem 1.5rem;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 4px;
}

.add-button:hover {
    background-color: #218838;
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
