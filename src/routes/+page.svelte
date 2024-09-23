<script>
    import Lastfm from "$lib/components/Lastfm.svelte";

    export let data;
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
    <img src="/i-hate-sorting-assets/BlinkyLiloStitch.gif" alt="Lilo & Stitch blinky graphic" class="inbl" />
</div>

<h3 class="ub wht nfw jst">
    My name is Stitch. I'm a hobbyist developer, designer, and overall jack of all trades! :3<br /><br />
    I have ADD and autism, please keep this in mind when communicating with me!<br /><br />
    I can be found most places online as "s626ch",<br />
    you can also email me at <a href="mailto:stitch@liloandstit.ch" target="_blank">stitch(at)liloandstit.ch</a>!
</h3>
<h3 class="ub wht cnt" style="margin-bottom:4px;margin-top:0;">last.fm</h3>
<Lastfm data={data.lastfm}></Lastfm>
<img src="/i-hate-sorting-assets/stitchlol.gif" alt="Stitch laughing" class="fuckapple" />
