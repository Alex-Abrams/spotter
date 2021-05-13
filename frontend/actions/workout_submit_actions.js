export const RECEIVE_LIFTS_AND_SETS = "RECEIVE_LIFTS_AND_SETS";
export const RESET_LIFTS_AND_SETS = "RESET_LIFTS_AND_SETS";
import fetch from 'cross-fetch';

export const receiveLiftsAndSets = (liftsAndSets) => ({
  type: RECEIVE_LIFTS_AND_SETS,
  liftsAndSets
});

export const resetLiftsAndSets = () => ({
  type: RESET_LIFTS_AND_SETS,
});

export function fartTest(fart) {
  console.log("fart?", fart);
}

// /users/:user_id/workouts(.:format)
// exercise_section ==> type
export function postWorkout(workout, auth_token) {
  return function action(dispatch) {
    const request = fetch(`http://10.0.2.2:3000/users/${workout.user_id}/workouts`, {
      method: 'POST',
        headers: {
          "Authorization": auth_token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: `${workout.user_id}`,
          exercise_section: `${workout.type}`
        })
    });

    return request.then(
      response => response.json(),
    )
    .then(
      json => console.log("great post Workout Success"),
      err => console.log("postWorkout post error :(")
    );

  }
}

// /users/:user_id/workouts/:workout_id/lifts
                                                //(workout, auth_token)
export function postLiftsAndSets(liftsAndSets) {
  // i think for testing just use an actual user id and workout id
  // console.log(Object.values(liftsAndSets));
  console.log(liftsAndSets);
  // console.log("hello!");
  // let promises = [];
  // liftsAndSets.forEach(set => {
  //   console.log("SET!");
  //   // promises.push(fetch(`http://10.0.2.2:3000/users/${workout.user_id}/workouts/${workout.id}/lifts`));
  //   // promises.push(fetch(`http://10.0.2.2:3000/users/1/workouts/1/lifts`));
  // });

  // console.log(promises);

  // return function action(dispatch) {
  //
  // }
}
