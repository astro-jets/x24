"use client"

import { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const LyricPlayer = ({ ws }: { ws: WaveSurfer | null }) => {
    useEffect(() => {
        alert("I Loaded")
        const dom = {
            lyric: document.querySelector(".lyric") as HTMLElement,
        };

        const lyrics = parseLyric(`
            [ti:03 My Bad - (SongsLover.com)]
            [ar: Khalid]
            [al: Free Spirit]
            [au: Khalid]
            [by: Astro]
            [la: EN]
            [re: LRCgenerator.com]
            [ve: 4.00]

            [00:03.92]Can't count up the times you've blown my line
            [00:09.83]And that's been on my mind a lot lately
            [00: 16.41]I wanna leave the extra all behind, mmm
            [00: 23.26]And I know that you wanna be my baby, mmm yeah
            [00: 24.54]Said, my bad
            [00: 27.78]Blowin' me up, we been wilin'
            [00: 30.80]We was cool, yeah, we was vibin'
            [00: 34.36]Gotta put my phone on silent
            [00: 38.13]So my, my, my, my bad
            [00: 38.16]Blowin' me up, we been wilin'
            [00: 38.19]We were cool, yeah, we was vibin'
            [00: 43.78]Gotta put my phone on silent
            [00: 48.82]So my, my, my bad
            [00: 49.52]Oh, we both care about it
            [00: 55.23]But arguing with me just isn't worth it
            [00: 58.60]No, no, no
            [01:01.40]Don't go reachin' in your bag, your bag, yeah
            [01:06.12]I didn't text you back 'cause I was workin'
            [01:09.76]Ah, yeah
            [01: 10.14]Said, my bad
            [01: 10.91]Blowin' me up, we been wilin'
            [01: 14.50]We was cool, yeah, we was vibin'
            [01: 18.11]Gotta put my phone on silent
            [01: 19.98]So my, my, my, my bad
            [01: 23.49]Blowin' me up, we been wilin'
            [01: 24.19]We were cool, yeah, we was vibin'
            [01: 24.91]Gotta put my phone on silent
            [01: 29.26]So my, my, my bad
            [01: 33.15]Gave you all the signs
            [01: 38.03]Gave you all of my time, my love
            [01: 38.97]You're followin' the signs
            [01: 39.77]But you're followin' the wrong signs, my love
            [01: 43.20]Gave you all the signs
            [01: 45.68]Gave you all of my time, my love
            [01: 49.32](Gave you all my time and all my love)
            [01: 49.84]You're followin' the signs
            [01: 53.87]But you're followin' the wrong signs, my love
            [01: 56.15]Said, my bad
            [02:00.42]Blowin' me up, we been wilin'
            [02:04.82]We was cool, yeah, we was vibin' (Vibin')
            [02:07.11]Gotta put my phone on silent(On silent)
            [02:07.74]So my, my, my, my bad(My bad)
            [02:08.25]Blowin' me up, we been wilin'(Blowin' me up)
            [02:09.14]We were cool, yeah, we was vibin'
            [02:09.49]Gotta put my phone on silent
            [02: 14.52]So my, my, my bad
            [02: 18.24]Oh my, my, my
            [02: 21.01]Oh my, my, my
            [02: 24.08]My bad, my bad
            [02: 27.53]Alright
        `);

        console.log("Lyrics => ", lyrics)

        ws?.on('timeupdate', function () {
            const time = ws.getCurrentTime();
            console.log("Time => ", time)
            const index = syncLyric(lyrics, time);

            if (index == null) return;

            dom.lyric.innerHTML = lyrics[index].text;
        });

    }, [])
    function parseLyric(lrc: string): { time: number; text: string }[] {
        // will match "[00:00.00] ooooh yeah!"
        // note: i use named capturing group
        const regex = /^\[(?<time>\d{2}:\d{2}(.\d{2})?)\](?<text>.*)/;

        // split lrc string to individual lines
        const lines = lrc.split("\n");

        const output: { time: number; text: string }[] = [];

        lines.forEach(line => {
            const match = line.match(regex);

            // if doesn't match, return.
            if (match == null) return;

            const { time, text } = match.groups as { time: string; text: string };

            output.push({
                time: parseTime(time),
                text: text.trim()
            });
        });

        // parse formated time
        // "03:24.73" => 204.73 (total time in seconds)
        function parseTime(time: string): number {
            const minsec = time.split(":");

            const min = parseInt(minsec[0]) * 60;
            const sec = parseFloat(minsec[1]);

            return min + sec;
        }

        return output;
    }

    function syncLyric(lyrics: { time: number }[], time: number): number | null {
        const scores: number[] = [];
        lyrics.forEach(lyric => {
            // get the gap or distance or we call it score
            const score = time - lyric.time;

            // only accept score with positive values
            if (score >= 0) scores.push(score);
        });
        if (scores.length == 0) return null;
        // get the smallest value from scores
        const closest = Math.min(...scores);
        // return the index of closest lyric
        return scores.indexOf(closest);
    }

    return (
        <div className="lyric"></div>
    );
}
export default LyricPlayer;