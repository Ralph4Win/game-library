<script>
    import "$routes/styles.css";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap/dist/js/bootstrap.bundle.min.js";
</script>

<nav
    class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
    data-bs-theme="dark"
>
    <div class="container-fluid">
        <a class="navbar-brand" href="/">GameStack</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/games">
                        Games
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/platforms">
                        Platforms
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container mt-3">
    <slot />
</div>
