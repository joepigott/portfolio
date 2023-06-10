<script>
    let links = [
        { label: "physics", href: "./physics"},
        { label: "linux", href: "./linux"},
        { label: "flintlock", href: "./flintlock"},
        { label: "hexgame", href: "./hexgame"},
        { label: "pigtex", href: "./pigtex"},
    ];

    let socials = [
        { label: "󰋾", href: "https://instagram.com/joe.pigs_"},
        { label: "", href: "mailto:pigroy@pigroy.ml"},
        { label: "", href: "https://github.com/joepigott"},
    ];

    let mobileNav = false;
</script>

<style>
    .nav {
        background-color: #1c1b17;
        font-family: "JetBrainsMono Bold";

        position: fixed;
        z-index: 1000;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-items: flex-start;
    }

    .nav a:not(.icon) {
        text-decoration: none;
        background-color: #74657a;
        color: #e5e0c9;
        padding: 0.5em;
        margin: 0.5em;
        border-radius: 10px;
        transition: 0.05s;
    }

    .nav a:not(.icon):hover {
        background-color: #a589af;
        color: #1c1b17;
    }

    .nav a:active,
    .nav .social a:active {
        transform: translateY(2px);
    }

    .nav .icon {
        font-size: 2em;
        padding-left: 0.5em;
        padding-right: 0.5em;
        color: #74657a;
        text-decoration: none;
        transition: 0.05s;
    }

    .nav .icon:hover {
        color: #a589af;
    }

    .nav .social {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .mobile-nav {
        background-color: #1c1b17;
        font-family: "JetBrainsMono Bold";

        position: fixed;
        z-index: 1000;
        top: 0;
        width: 100%;
        display: none;
        align-items: center;
        justify-items: flex-start;
        flex-wrap: wrap;
    }

    .mobile-nav .icon {
        font-size: 2em;
        padding-left: 0.5em;
        padding-right: 0.5em;
        color: #74657a;
        text-decoration: none;
        transition: 0.05s;
        cursor: pointer;
    }

    .mobile-nav .icon:hover {
        color: #a589af;
    }

    .mobile-nav .social {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .mobile-dropdown {
        background-color: #1c1b17;
        font-family: "JetBrainsMono Bold";

        margin-top: 40px;
        position: fixed;
        z-index: 1000;
        width: 100%;
        display: none;
        flex-direction: column;
        justify-items: flex-start;
    }

    .mobile-dropdown a {
        text-decoration: none;
        background-color: #74657a;
        color: #e5e0c9;
        padding: 0.5em;
        margin: 0.5em;
        border-radius: 10px;
    }

    .mobile-dropdown a:hover {
        background-color: #a589af;
        color: #1c1b17;
    }

    @media only screen and (max-width: 868px) {
        .nav {
            display: none;
        }

        .mobile-nav, .mobile-dropdown {
            display: flex;
        }
    }
</style>

<nav>
    <div class="nav">
        <a href="./" class="icon">JP</a>
        {#each links as link}
            <a href={link.href}>{link.label}</a>
        {/each}
        <div class="social">
            {#each socials as link}
                    <a href={link.href} class="icon">{link.label}</a>
            {/each}
        </div>
        <div style="width: 0.5em;"></div>
    </div>
    <div class="mobile-nav">
        <a class="icon" on:click={() => {mobileNav = !mobileNav}}>󰍜</a>
        <div class="social">
            {#each socials as link}
                <a href={link.href} class="icon">{link.label}</a>
            {/each}
        </div>
    </div>
    {#if mobileNav}
        <div class="mobile-dropdown">
            <a href="./">home</a>
            {#each links as link}
                <a href={link.href}>{link.label}</a>
            {/each}
        </div>
    {/if}
</nav>
