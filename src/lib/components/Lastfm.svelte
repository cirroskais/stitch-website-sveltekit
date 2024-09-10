<script lang="ts">
    import { onMount } from "svelte";

    export let data;
    let src = "missing.png",
        title = "...",
        album = "...",
        artist = "...",
        alt = "a light blue question mark centered on a dark blue background",
        href = "#";

    onMount(async () => {
        try {
            const response = await data;
            const {
                recenttracks: {
                    track: [track],
                },
            } = await response.json();

            src = track.image.find((image: { size: string }) => image.size === "large")["#text"];
            title = track.name;
            artist = track.artist["#text"];
            album = track.album["#text"];
            alt = `album art for ${album} by ${artist}`;
            href = track.url;
        } catch (_) {
            console.error(_);
        }
    });
</script>

<a {href} target="_blank" style="text-decoration: none;">
    <div id="lastfm">
        <div class="lastfm__box">
            <img {src} class="lastfm__art" {alt} title={alt} />
            <div class="lastfm__info">
                <h2 class="lastfm__track ub wht">{title}</h2>
                <p class="lastfm__artist ub">{artist}</p>
                <p class="lastfm__album ub">{album}</p>
            </div>
        </div>
    </div>
</a>
