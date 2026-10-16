# Miguel Bargiela — Portfolio V5

Open `index.html` in a browser. `korridor.html` is a **separate page**, linked from the homepage navigation. Hosting must keep all files and the `assets` folder together.

## Pages
- `index.html`: biography, projects, solo video placeholders, calendar, private lessons, contact and social profiles.
- `korridor.html`: independent quartet biography, photo, recognition and provisional quartet video placeholders.

## Add concerts WITHOUT touching the site's HTML
**Recommended:** Create a separate public Google Calendar called e.g. `Miguel Bargiela — Concerts`. Add public concert entries in the normal Google Calendar interface. Go to Settings > [calendar name] > Access permissions: enable public visibility. Copy its `Calendar ID` from Integrate calendar into the quotes in `calendar-config.js`. Once configured, the site's Calendar section embeds the Google Calendar agenda and updates as you edit Google Calendar. Only add information you intend to make public. Embedded calendar requires internet access.

**Alternative:** keep `PUBLIC_CONCERT_CALENDAR_ID = ''` and add concert objects to `events.js`. Past/upcoming events sort automatically.

## Recordings
The three YouTube links are temporarily shown on Miguel's page; the two Google Drive links on the quartet page. This allocation is PROVISIONAL; please confirm performers/works before publishing. Drive files must be accessible to viewers for embedded playback.

## Contact / private lessons
Personal contact actions use `miguel.bargiela.souto@gmail.com`, while the Korridor Quartet page uses `korridorsaxquartet@gmail.com`; Instagram and YouTube point to the supplied accounts. Teaching offers in-person lessons in Vienna and online lessons; no fixed price or availability is claimed.

## Publish
Upload this folder to Netlify, Cloudflare Pages or GitHub Pages as a static site. For a clean URL the ensemble page lives at `/korridor.html`; optional hosting rewrite can map `/korridor` to that page.
