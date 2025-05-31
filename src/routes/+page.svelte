<script>
    // You can add more later if you want
</script>

<!-- Main container -->
<div class="home-container">
    <!-- Logo -->
    <img src="/images/logo.jpg" alt="Logo" class="logo" />

    <!-- Title -->
    <h1>Welcome to My Game Library</h1>

    <!-- Description Text -->
    <p class="description">
        I created this page to share insights into my gaming experiences and to keep track of the games I’ve played, enjoyed, and plan to explore in the future.
        It serves as a personal space to reflect on my gaming journey and as a wishlist for titles I’m excited to dive into.
    </p>

    <!-- Action buttons -->
    <div class="buttons">
        <a href="/games"><button class="btn">View Games</button></a>
        <a href="/platforms"><button class="btn">View Platforms</button></a>
    </div>

    <!-- Optional background graphics -->
    <div class="bg-graphics">
        🎮 👾 🕹️ 🚀 🏆
    </div>
</div>

<style>
    .home-container {
        text-align: center;
        padding: 2rem;
        color: #fff;
    }

    .logo {
        width: 200px;
        height: auto;
        border-radius: 10px;
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #00ffcc;
    }

    .description {
        max-width: 600px;
        margin: 0 auto 2rem auto;
        font-size: 1.1rem;
        line-height: 1.6;
        background-color: #111;
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid #444;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .btn {
        padding: 0.8rem 1.5rem;
        background-color: #28a745;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.1rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }

    .btn:hover {
        background-color: #218838;
    }

    .bg-graphics {
        margin-top: 3rem;
        font-size: 2rem;
        opacity: 0.5;
    }
</style>
