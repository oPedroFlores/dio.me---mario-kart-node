// Game definitions

class Player {
  constructor(name, speed, maneuverability, power) {
    this.name = name;
    this.speed = speed;
    this.maneuverability = maneuverability;
    this.power = power;
  }

  runRacingTrack(racingTrack) {
    const dado = Math.floor(Math.random() * 6) + 1;
    switch (racingTrack) {
      case 'RETA':
        return dado + this.speed;
      case 'CURVA':
        return dado + this.maneuverability;
      case 'CONFRONTO':
        return dado + this.power;
      default:
        return false;
    }
  }
}

const Mario = new Player('Mario', 4, 3, 3);
const Peach = new Player('Peach', 3, 4, 2);
const Yoshi = new Player('Yoshi', 2, 4, 3);
const Bowser = new Player('Bowser', 5, 2, 5);
const Luigi = new Player('Luigi', 3, 4, 4);
const DonkeyKong = new Player('Donkey Kong', 2, 2, 5);

const Players = [Mario, Peach, Yoshi, Bowser, Luigi, DonkeyKong];
const racingTracks = ['RETA', 'CURVA', 'CONFRONTO'];

const totalRounds = 5;

// Game
const Player1 = Players[0];
const Player2 = Players[1];
let Player1Score = 0;
let Player2Score = 0;
for (let index = 0; index < totalRounds; index++) {
  const track = racingTracks[Math.floor(Math.random() * racingTracks.length)];
  const Player1Result = Player1.runRacingTrack(track);
  const Player2Result = Player2.runRacingTrack(track);

  if (track === 'CONFRONTO') {
    if (Player1Result > Player2Result) {
      Player2Score = Math.max(0, Player2Score - 1);
    } else if (Player2Result > Player1Result) {
      Player1Score = Math.max(0, Player1Score - 1);
    }
  } else {
    Player1Result > Player2Result ? Player1Score++ : Player2Score++;
  }
}

console.log(`${Player1.name} scored ${Player1Score} points.`);
console.log(`${Player2.name} scored ${Player2Score} points.`);
Player1Score > Player2Score
  ? console.log(`${Player1.name} wins!`)
  : console.log(`${Player2.name} wins!`);
