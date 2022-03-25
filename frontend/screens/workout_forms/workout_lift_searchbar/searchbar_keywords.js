// This file contains keywordSearch() which organizes and formats my dropdown menu on some text inut and select screens
const EXERCISES = [
  "Chest",
  "Legs",
  "Shoulders",
  "Back",
  "Arms",
];

let chestArray = [
  "Barbell Chest Press",
  "Dumbell Chest Press",
  "Dumbbell Chest Flies",
  "Barbell Incline Chest Press",
  "Barbell Decline Chest Press",
  "Butterflies",
  "Chest Dips",
  "Dumbbell Chest Incline",
  "Dumbbell Chest Decline",
];

let legsArray = [
  "Front Squat",
  "Split Squat",
  "Barbell Squat",
  "Dumbell Squat",
  "Hip Thrust",
  "Machine Squats",
  "Lunges",
  "Machine Leg Press",
  "DeadLifts",
  "Seated Calf Raise",
  "Standing Calf Raise",
];

let shouldersArray = [
  "Barbell Shoulder Press",
  "Machine Shoulder Press",
  "Seated Dumbell Shoulder Press",
  "Front Raise",
  "Reverse Pec Deck Fly",
  "Bent-Over Reverse Raise",
  "Dumbbell Lateral Raise",
  "Push Press",
  "Reverse Cable Crossover",
  "Cable Lateral Raise",
  "Barbell Shrugs",
  "Dumbbell Shrugs",
  "Upright Rows",
  "Dumbell Flies",
  "Clean And Press",
  "Shrugs",
];

let backArray = [
  "DeadLift",
  "Barbell Bent-Over Row",
  "Dumbell Single-Arm Row",
  "Seated Cable Row (Close Grip)",
  "Seated Cable Row (Wide Grip)",
  "Pullups",
  "Lateral Pulldown",
  "Front Squats",
];

let armsArray = [
  // bicep
  "Bicep Curl (Barbell)",
  "Bicep Curl (Dumbell)",
  "Reverse Bicep Curl (Dumbell)",
  "Reverse Bicep Curl (Barbell)",
  "Hammer Curls",
  "Bicep Curl (Cable)",
  "Reverse Curl (Cable)",
  "Seated Bicep Curl (Dumbell)",
  // tricep
  "Skull Crushers",
  "Close-Grip Bench Press",
  "Cable Tricep Pushdown",
  "Tricep Dips",
  "Overhead Extension (Cable)",
  "Overhead Extension (Dumbell)",
];


let exerciseArray = [chestArray, legsArray, shouldersArray, backArray, armsArray];
  // set them in array
let exerciseHash = {};

function changeToArrayInHash() { // change the array of arrays into an array of organized hashes
  for(let i = 0; i < exerciseArray.length; i++) {

    exerciseArray[i] = exerciseArray[i].sort(); // sort them each so they are alphabetized

    let exerciseHashesInArray = [];

    for(let n = 0; n < exerciseArray[i].length; n++) { // pushes the name: format for my search bar
      exerciseHashesInArray.push({name: exerciseArray[i][n]});
    };

    exerciseHash = Object.assign({}, exerciseHash, { [EXERCISES[i]]: exerciseHashesInArray }); // creates [{ chest: {}, arms: {}, ...etc}]
    exerciseHashesInArray = [];
  };

  return exerciseHash;
};

// keywordSearch(); is the main function ill be using whenever i need a search bar for lift related choices
export function keywordSearch(keyword) {
  return changeToArrayInHash()[keyword];
};
