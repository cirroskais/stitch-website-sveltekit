<script lang="ts">
    import "../app.css";
    import "../embedded.css";
</script>

<svelte:head>
    <title>liloandstit.ch</title>
    <link rel="icon" type="image/png" href="https://liloandstit.ch/boojiboo.png" />
    <meta name="title" content="liloandstit.ch" />
    <meta name="description" content="aloha, i'm Stitch, welcome to my site :D" />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://liloandstit.ch/" />
    <meta property="og:title" content="liloandstit.ch" />
    <meta property="og:description" content="aloha, i'm Stitch, welcome to my site :D" />
    <meta property="og:image" content="https://liloandstit.ch/boojiboo.png" />
    <meta name="theme-color" content="#f96ba6" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:url" content="https://liloandstit.ch/" />
    <meta property="twitter:title" content="liloandstit.ch" />
    <meta property="twitter:description" content="aloha, i'm Stitch, welcome to my site :D" />
    <meta property="twitter:image" content="https://liloandstit.ch/boojiboo.png" />
</svelte:head>

<div class="container">
    <div class="top">
        <div class="bambooTop">
            <div class="stoppie1 stsh"></div>
            <div class="stoppie2 stsh"></div>
            <div class="stoppie3 stsh"></div>
            <div class="stoppie4 stsh"></div>
            <div class="stoppie5 stsh"></div>
        </div>
        <img src="i-hate-sorting-assets/PALMR.png" alt="doodled palm tree" class="palmL" />
        <a href="/" class="headerlink">
            <img src="i-hate-sorting-assets/LNS.png" alt="liloandstit.ch" class="logo" />
        </a>
        <img src="i-hate-sorting-assets/PALM.png" alt="doodled palm tree" class="palmR" />
        <div class="bambooBottom">
            <div class="stoppie1 stsh"></div>
            <div class="stoppie2 stsh"></div>
            <div class="stoppie3 stsh"></div>
            <div class="stoppie4 stsh"></div>
            <div class="stoppie5 stsh"></div>
        </div>
    </div>
    <hr class="inv" />
    <hr class="inv" />
    <div class="links">
        <div class="flw">
            <h1 class="bb lh1 stitch">Links</h1>
        </div>
        <div class="links2">
            <h2 class="lh1txt ub">
                <a href="./">Home</a>
                <a href="./about">About</a>
                <a href="https://tantalog.liloandstit.ch/" target="_blank">Tantalog Dictionary</a>
                <a href="https://bsky.liloandstit.ch/" target="_blank">Bluesky</a>
                <a href="https://github.com/s626ch/" target="_blank">Github</a>
            </h2>
            <h2 class="lh1txt ub">
                <a href="https://twitter.com/s626ch/" target="_blank">Twitter</a>
                <a href="https://twitter.com/sillystitchy/" target="_blank">Fursuit Twitter</a>
                <a href="https://discord.liloandstit.ch/" target="_blank">Discord</a>
                <a href="./buttons">Buttons</a>
                <a href="./more">More</a>
            </h2>
        </div>
    </div>
    <hr class="inv" />
    <div class="content">
        <slot></slot>
    </div>
</div>
