const TOTAL_GAMES = 100000;

const results = [];

for (let i = 0; i < TOTAL_GAMES; i++) {
    results.push(play_game());
}

const mean = results.reduce((a, b) => a + b) / TOTAL_GAMES;

console.log("Min", Math.min(...results));
console.log("Max", Math.max(...results));
console.log("Ave", mean);

function play_game() {
    const WINNING_SCORE = 100;
    const CHUTES = {
        16: 6,
        48: 26,
        49: 10,
        56: 53,
        62: 18,
        64: 60,
        87: 24,
        93: 73,
        95: 75,
        98: 78
    };
    
    const LADDERS = {
        2: 19,
        4: 14,
        8: 31,
        21: 42,
        28: 84,
        36: 44,
        51: 67,
        71: 91,
        80: 100
    }

    let score = 0;
    let turns = 0;
    
    while (score < WINNING_SCORE) {
        turns++;
        score += roll_dice(6);
        
        if (CHUTES[score]) {
            score = CHUTES[score];
        }

        if (LADDERS[score]) {
            score = LADDERS[score];
        }
    }

    return turns;
}

function roll_dice(max) {
    return Math.floor(Math.random() * max + 1)
}