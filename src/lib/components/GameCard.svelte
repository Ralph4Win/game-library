<script>
  let { game } = $props();
</script>

<div class="game-card">
  <div>
    <img class="img-fluid" src={game.image} alt="" />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/games/" + game._id}>{game.title}</a>
    </div>
    <div>
      Platform: {game.platform}
    </div>
    <div>
      Release Date: {game.releaseDate}
    </div>
    <div>
      Rating: {game.rating}
    </div>
    <div>
      Played: {game.played ? 'Yes' : 'No'}
    </div>
  </div>
</div>

<style>
  .game-card {
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
  }
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }
</style>
