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
