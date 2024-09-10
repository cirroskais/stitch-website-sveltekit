export function load({ fetch }) {
    const lastfm = fetch("https://lastfm-api.dev.madhouselabs.net/getRecentTracks?username=s626ch");

    return { lastfm };
}
