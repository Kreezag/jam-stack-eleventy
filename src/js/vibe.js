const vibes = [
  "...and you are awesome!",
  "...have a wonderful day!",
  "...and you've got this!",
  "...and so is this puppy! 🐶"
];

const vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector('.vibe').append(vibe);
