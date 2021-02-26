---Store layout for Spotter---

authenticaton: {

}

entities: {
  users: {},

  body_parts: {
    1: {},
    2: {
      id: 2,
      name: "chest",
      user_id: 4,
      }

    },
          // orrrrrrrrr
    3: {
      id: 3,
      name: "legs",
      user_id: 4,
      workouts: {
        basically put workouts reducer here
      }

    },
    4: {etc,}

  }

  workouts: {
    1: {},
    2: {
      id: 2,
      body_part_id: 2,
      date: "11/11/2020"
    },

  }

  or put workouts in bodyparts, and reps_weights into lifts



}

// this is just for submitting the new workout form
entities : {
  users: {
    9: {id: 9, email: "tomhardy"}
  }
  new_workout_entity: {  //action receiveWorkout({user_id: 1, type:chest})
    chest: {
      id: 1,
      user_id: 9,
      type: "chest",
      // user_id: 9, dont think i need this because i can get it from store
    } ,// end chest 1
    lifts: { // receiveLift
      1: {
        id: 1, ///no id
        type: "chest",
        name: "bench press",
        reps: 15,
        weight: 50,
        body_part_id: 1,
      },
      2: {
        id: 2,
        type: "chest",
        name: "bench press",
        reps: 12,
        weight: 5,
        body_part_id: 1,
      }
    }
  }
}
