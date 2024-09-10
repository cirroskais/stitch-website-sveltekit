<script>
    function escapeHTML(string) {
        return String(string).replace(/[&<>"']/g, function (s) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            }[s];
        });
    }
    async function lastfm() {
        try {
            const res = await fetch("https://lastfm-api.dev.madhouselabs.net/getRecentTracks?username=s626ch");
            const {
                recenttracks: {
                    track: [track],
                },
            } = await res.json();
            let art = track.image.find((image) => image.size === "large")["#text"];
            let trackname = track.name;
            let artist = track.artist["#text"];
            let album = track.album["#text"];
            let alttxt = `album art for ${album} by ${artist}`;
            let tracklink = `https://www.last.fm/music/${artist}/_/${trackname}`
                .replace(/\?/g, "%3F")
                .replace(/\+/g, "%252B")
                .replace(/ /g, "+");
            tracklink = escapeHTML(tracklink);
            if (art == "") {
                art = `https://liloandstit.ch/missing.png`;
                alttxt = `a light blue question mark centered on a dark blue background, as there is missing album art for this song`;
            }
            trackname = escapeHTML(trackname);
            artist = escapeHTML(artist);
            album = escapeHTML(album);
            const container = document.getElementById("lastfm");
            container.innerHTML = `
            <div class="lastfm__box">
                <a href="${tracklink}" target="_blank" class="lastfm__link"><img src="${art}" class="lastfm__art" alt="${alttxt}" title="${alttxt}"/></a>
                <div class="lastfm__info">
                    <h2 class="lastfm__track ub wht lastfm__ellipse" title="${trackname}">${trackname}</h2>
                    <p class="lastfm__artist ub lastfm__ellipse" title="${artist}">${artist}</p>
                    <p class="lastfm__album ub lastfm__ellipse" title="${album}">${album ? `on ${album}` : ""}</p>
                </div>
            </div>
            `;
            console.log(art, trackname, artist, album);
        } catch (error) {
            console.error("error getting last.fm info: ", error);
        }
    }
</script>

<h1 class="bb cnt nfw brd">Aloha! Welcome to my personal site!</h1>
<h3 class="ub wht nfw mobile">Scroll if you're on mobile!</h3>
<div class="quote-box">
    <p class="quote-text ub fixmargin">
        Monstrosity? What you see before you is the first of a new species. I call it Experiment 626. He is bulletproof,
        fireproof, and can think faster than [a] supercomputer. He can see in the dark, and lift objects three thousand times
        his size. His only instinct... to destroy everything he touches!
    </p>
    <p class="quote-author ub fixmargin">- Jumba Jookiba</p>
</div>
<div class="cnt">
    <img src="i-hate-sorting-assets/BlinkyLiloStitch.gif" alt="Lilo & Stitch blinky graphic" class="inbl" />
</div>

<h3 class="ub wht nfw jst">
    My name is Stitch. I'm a hobbyist developer, designer, and overall jack of all trades! :3<br /><br />
    I have ADD and autism, please keep this in mind when communicating with me!<br /><br />
    I can be found most places online as "s626ch",<br />
    you can also email me at <a href="mailto:stitch@liloandstit.ch" target="_blank">stitch(at)liloandstit.ch</a>!
</h3>
<h3 class="ub wht cnt" style="margin-bottom:4px;margin-top:0;">last.fm</h3>
<div id="lastfm">
    <!-- dummy html that'll be replaced, just makes the loading of it less jarring -->
    <div class="lastfm__box">
        <img
            src="missing.png"
            class="lastfm__art"
            alt="a light blue question mark centered on a dark blue background"
            title="a light blue question mark centered on a dark blue background"
        />
        <div class="lastfm__info">
            <h2 class="lastfm__track ub wht">...</h2>
            <p class="lastfm__artist ub">...</p>
            <p class="lastfm__album ub">...</p>
        </div>
    </div>
</div>
<img src="i-hate-sorting-assets/stitchlol.gif" alt="Stitch laughing" class="fuckapple" />
