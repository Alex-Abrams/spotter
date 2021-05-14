// t.integer "workout_id", null: false
// t.integer "weight", null: false
// t.integer "reps", null: false
// t.string "name", null: false
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.string "exercise_section"

// export const createLiftSet = (singleLiftSet, workout_id, auth_token) => {
//   return fetch()
// }
import fetch from 'cross-fetch';

export function postLiftsAndSets(liftsAndSets, workout_id, auth_token) {
   // i think for testing just use an actual user id and workout id
   // console.log(Object.values(liftsAndSets));
   // console.log(liftsAndSets);
   // console.log("hello!");
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

     // promise all the promise array liftsAndSets
     //
     // return promises;
     console.log(promises);
   });
 }
