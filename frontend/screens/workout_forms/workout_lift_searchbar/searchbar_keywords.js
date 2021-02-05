

let chestArray = [
  "Bench Chest Press",
  "Dumbbell Chest Flies",
  "Incline Chest Press",
  "Decline Chest Press",
  "Butterflies",
  "Chest Dips",
  "Dumbbell Chest Incline",
  "Dumbbell Chest Decline",
];

let legsArray = [
  "Front Squats",
  "Split Squat",
  "Squat (regular)",
  "Dumbell Squat",
  "Hip Thrust",
  "Machine Squats",
  "Lunges",
  "Leg Press",
  "DeadLifts (regular)",
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
]

let backArray = [
  "DeadLift",
  "Bent-Over Row (Barbell)",
  "Single-Arm Row (Dumbell)",
  "Seated Cable Row (Close Grip)",
  "Seated Cable Row (Wide Grip)",
  "Pullup",
  "Lat Pulldown",
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
  
]


function keywordSearch(keyword) {
  let searchList = null;
  if (keyword === "Chest") {
    searchList = [{name: "Bench Press"}, {name: "Dumbbell Press"}, {name: "Dumbbell Flies"}, {name: "Incline Press"}, {name: "Decline Press"},
        {name: "Butterflies"}, {name: "Chest Dips"}, {name: "Dumbbell Incline"}, {name: "Dumbbell Decline"}];
    return searchList;

  } else if (keyword === "Legs") {
    searchList = [{name: "Squat"}, {name: "Machine Squats"},];
    return searchList;

  } else if (keyword === "Shoulders") {
    searchList = [{name: "3"}];
    return searchList;

  } else if (keyword === "Back") {
    searchList = [{name: "4"}];
    return searchList;

  } else if (keyword === "Arms") {
    searchList = [{name: "5"}];
    return searchList;
  };
};

// console.log(keywordSearch("Chest"));


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
