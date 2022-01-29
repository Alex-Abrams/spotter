// t.integer "workout_id", null: false
// t.integer "weight", null: false
// t.integer "reps", null: false
// t.string "name", null: false
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.string "exercise_section"

import fetch from 'cross-fetch';

export function postLiftsAndSets(liftsAndSets, workout_id, auth_token) {
   let promises = [];
   console.log("liftsAndSets", liftsAndSets);
   liftsAndSets.forEach(set => {
     // console.log("SET!");
     promises.push(fetch(`http://10.0.2.2:3000/users/${user_id}/workouts/${workout_id}/lifts`, {
       method: 'POST',
       headers: {
         "Authorization": auth_token,
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         name: `${set.name}`,
         reps: `${set.reps}`,
         weight: `${set.weight}`,
         exercise_section: `${set.type}`,
         workout_id: `${workout_id}`
       })
     }));

   });
 }
