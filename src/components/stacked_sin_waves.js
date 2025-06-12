/**
@author Raurir
@title  Stacked sin waves
@desc   noob at frag shaders
*/

// Accept a palette from context, or use default
const defaultPalette = [
    //'black',        // 0 < top
    //'purple',       // 1
    'orange',      // 2
    'orangered',    // 4
	'red',          // 3
    //'gold',         // 5
    //'lemonchiffon', // 6
    'gold'         // 7 < bottom
];

const defaultPalette2 = [
    'red',          
    'orangered',    
    'gold',         
    'white'          
];


//const chars = "█▓▒░ ".split('')
const chars = " █▓▒░█▓▒░ ".split('')

import { fract } from "./num.js"

export function main(coord, context){
    const t = context.time * 0.0015
    const x = coord.x  + 40
    const y = coord.y 

    const palette = context && context.palette ? context.palette : defaultPalette;
	//const palette2 = context && context.palette2 ? context.palette2 : defaultPalette2;

    const v0 = context.cols / 4 + wave(t, y, [0.15, 0.13, 0.37], [10,8,5]) * 0.9;
    const v1 = v0 + wave(t, y, [0.12, 0.14, 0.27], [3,6,5]) * 0.8;
    const v2 = v1 + wave(t, y, [0.089, 0.023, 0.217], [2,4,2]) * 0.3;
    const v3 = v2 + wave(t, y, [0.167, 0.054, 0.147], [4,6,7]) * 0.4;
	/*
    const i = x > v3 ? 4
        : x > v2 ? 3
        : x > v1 ? 2
        : x > v0 ? 1
        : 0;
		*/

	const i = x > v3 ? 9
        : x > v2 ? 8
        : x > v1 ? 7
        : x > v0 ? 6
		: x > v0 ? 5
		: x > v0 ? 4
		: x > v0 ? 3
		: x > v0 ? 2
		: x > v0 ? 1
        : 0;

    // Return both char and color for renderer to use
    return {
        char: chars[i],
        color: palette[i % 4] || palette[palette.length], // shift for more visible colors
        backgroundColor: palette[8]
    };
}

function wave(t, y, seeds, amps) {
    return (
        (Math.sin(t + y * seeds[0]) + 1) * amps[0]
        + (Math.sin(t + y * seeds[1]) + 1) * amps[1]
        + (Math.sin(t + y * seeds[2])) * amps[2]
    )
}