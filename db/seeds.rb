# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'rumpus', password: 'password', password_confirmation: 'password', email: 'tomhardy')
# user2 = User.create!(username: 'rumpus', password: 'password', password_confirmation: 'password', email: 'tomhardy')
# user2 = User.create!(name: 'rumpusrunes', password: 'password', password_confirmation: 'password', email: 'guest@guest.com')


#workouts

# "2021-05-05T20:29:52.759Z"
workout_1 = Workout.create(user_id: user1.id, exercise_section: "Legs") # #
workout_1.update_attribute :created_at, Time.new(2021, 12, 16); ## Year, Month, Day

workout_2 = Workout.create(user_id: user1.id, exercise_section: "Arms") # #
workout_2.update_attribute :created_at, Time.new(2021, 12, 17);

workout_3 = Workout.create(user_id: user1.id, exercise_section: "Back") # #
workout_3.update_attribute :created_at, Time.new(2021, 12, 18);

workout_4 = Workout.create(user_id: user1.id, exercise_section: "Chest")# #
workout_4.update_attribute :created_at, Time.new(2021, 12, 27);

workout_5 = Workout.create(user_id: user1.id, exercise_section: "Shoulders") #
workout_5.update_attribute :created_at, Time.new(2021, 12, 28);

workout_6 = Workout.create(user_id: user1.id, exercise_section: "Legs") #
workout_6.update_attribute :created_at, Time.new(2021, 12, 29);

workout_7 = Workout.create(user_id: user1.id, exercise_section: "Arms") #
workout_7.update_attribute :created_at, Time.new(2021, 12, 30);


workout_8 = Workout.create(user_id: user1.id, exercise_section: "Back") #
workout_8.update_attribute :created_at, Time.new(2022, 1, 1);

workout_9 = Workout.create(user_id: user1.id, exercise_section: "Chest") #
workout_9.update_attribute :created_at, Time.new(2022, 1, 2);

workout_10 = Workout.create(user_id: user1.id, exercise_section: "Shoulders") #
workout_10.update_attribute :created_at, Time.new(2022, 1, 3);

workout_11 = Workout.create(user_id: user1.id, exercise_section: "Legs") #
workout_11.update_attribute :created_at, Time.new(2022, 1, 4);

workout_12 = Workout.create(user_id: user1.id, exercise_section: "Arms") #
workout_12.update_attribute :created_at, Time.new(2022, 1, 5);

workout_13 = Workout.create(user_id: user1.id, exercise_section: "Back") #
workout_13.update_attribute :created_at, Time.new(2022, 1, 6);

workout_14 = Workout.create(user_id: user1.id, exercise_section: "Chest") #
workout_14.update_attribute :created_at, Time.new(2022, 1, 7);

workout_15 = Workout.create(user_id: user1.id, exercise_section: "Shoulders") #
workout_15.update_attribute :created_at, Time.new(2022, 1, 8);

workout_16 = Workout.create(user_id: user1.id, exercise_section: "Legs")
workout_16.update_attribute :created_at, Time.new(2022, 1, 9);

workout_17 = Workout.create(user_id: user1.id, exercise_section: "Arms")
workout_17.update_attribute :created_at, Time.new(2022, 1, 10);

workout_18 = Workout.create(user_id: user1.id, exercise_section: "Back")
workout_18.update_attribute :created_at, Time.new(2022, 1, 11);

workout_19 = Workout.create(user_id: user1.id, exercise_section: "Chest")
workout_19.update_attribute :created_at, Time.new(2022, 1, 12);

workout_20 = Workout.create(user_id: user1.id, exercise_section: "Shoulders")
workout_20.update_attribute :created_at, Time.new(2022, 1, 13);

#reps_weights
##############################
prng = Random.new
### Legs
3.times do
  x = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
  x.created_at = workout_1.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "DeadLifts")
  x.created_at = workout_1.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Lunges")
  x.created_at = workout_1.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Calf Raises")
  x.created_at = workout_1.created_at
  x.save
end

### Arms
3.times do
  x = Lift.create(workout_id: workout_2.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Dumbbell Curls")
  x.created_at = workout_2.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_2.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Tricep Press")
  x.created_at = workout_2.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_2.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Reverse Curls")
  x.created_at = workout_2.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_2.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Skull Crushers")
  x.created_at = workout_2.created_at
  x.save
end

### Back
3.times do
  x = Lift.create(workout_id: workout_3.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Deadlifts")
  x.created_at = workout_3.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_3.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Lateral Pulldowns")
  x.created_at = workout_3.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_3.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Seated Cable Row (Close Grip)")
  x.created_at = workout_3.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_3.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Pullups")
  x.created_at = workout_3.created_at
  x.save
end


### Chest
3.times do
  x = Lift.create(workout_id: workout_4.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Bench Press")
  x.created_at = workout_4.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_4.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Dumbell Flies")
  x.created_at = workout_4.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_4.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Incline Bench Press")
  x.created_at = workout_4.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_4.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Decline Bench Press")
  x.created_at = workout_4.created_at
  x.save
end

### Shoulders
3.times do
  x = Lift.create(workout_id: workout_5.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Military Press")
  x.created_at = workout_5.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_5.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Upright Rows")
  x.created_at = workout_5.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_5.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Seated Shoulder Press")
  x.created_at = workout_5.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_5.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Shrugs")
  x.created_at = workout_5.created_at
  x.save
end

 ## back
3.times do
  x = Lift.create(workout_id: workout_6.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
  x.created_at = workout_6.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_6.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "DeadLifts")
  x.created_at = workout_6.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_6.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Lunges")
  x.created_at = workout_6.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_6.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Calf Raises")
  x.created_at = workout_6.created_at
  x.save
end

### Arms
3.times do
  x = Lift.create(workout_id: workout_7.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Dumbbell Curls")
  x.created_at = workout_7.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_7.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Tricep Press")
  x.created_at = workout_7.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_7.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Reverse Curls")
  x.created_at = workout_7.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_7.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Skull Crushers")
  x.created_at = workout_7.created_at
  x.save
end

### Back
3.times do
  x = Lift.create(workout_id: workout_8.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Deadlifts")
  x.created_at = workout_8.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_8.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Lateral Pulldowns")
  x.created_at = workout_8.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_8.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Seated Cable Row (Close Grip)")
  x.created_at = workout_8.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_8.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Pullups")
  x.created_at = workout_8.created_at
  x.save
end


### Chest
3.times do
  x = Lift.create(workout_id: workout_9.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Bench Press")
  x.created_at = workout_9.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_9.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Dumbell Flies")
  x.created_at = workout_9.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_9.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Incline Bench Press")
  x.created_at = workout_9.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_9.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Decline Bench Press")
  x.created_at = workout_9.created_at
  x.save
end

### Shoulders
3.times do
  x = Lift.create(workout_id: workout_10.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Military Press")
  x.created_at = workout_10.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_10.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Upright Rows")
  x.created_at = workout_10.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_10.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Seated Shoulder Press")
  x.created_at = workout_10.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_10.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Shrugs")
  x.created_at = workout_10.created_at
  x.save
end

### Legs
3.times do
  x = Lift.create(workout_id: workout_11.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
  x.created_at = workout_11.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_11.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "DeadLifts")
  x.created_at = workout_11.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_11.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Lunges")
  x.created_at = workout_11.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_11.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Calf Raises")
  x.created_at = workout_11.created_at
  x.save
end

### Arms
3.times do
  x = Lift.create(workout_id: workout_12.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Dumbbell Curls")
  x.created_at = workout_12.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_12.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Tricep Press")
  x.created_at = workout_12.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_12.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Reverse Curls")
  x.created_at = workout_12.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_12.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Skull Crushers")
  x.created_at = workout_12.created_at
  x.save
end

### Back
3.times do
  x = Lift.create(workout_id: workout_13.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Deadlifts")
  x.created_at = workout_13.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_13.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Lateral Pulldowns")
  x.created_at = workout_13.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_13.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Seated Cable Row (Close Grip)")
  x.created_at = workout_13.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_13.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Pullups")
  x.created_at = workout_13.created_at
  x.save
end


### Chest
3.times do
  x = Lift.create(workout_id: workout_14.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Bench Press")
  x.created_at = workout_14.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_14.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Dumbell Flies")
  x.created_at = workout_14.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_14.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Incline Bench Press")
  x.created_at = workout_14.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_14.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Decline Bench Press")
  x.created_at = workout_14.created_at
  x.save
end

### Shoulders
3.times do
  x = Lift.create(workout_id: workout_15.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Military Press")
  x.created_at = workout_15.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_15.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Upright Rows")
  x.created_at = workout_15.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_15.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Seated Shoulder Press")
  x.created_at = workout_15.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_15.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Shrugs")
  x.created_at = workout_15.created_at
  x.save
end

 ## back
3.times do
  x = Lift.create(workout_id: workout_16.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
  x.created_at = workout_16.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_16.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "DeadLifts")
  x.created_at = workout_16.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_16.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Lunges")
  x.created_at = workout_16.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_16.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Calf Raises")
  x.created_at = workout_16.created_at
  x.save
end

### Arms
3.times do
  x = Lift.create(workout_id: workout_17.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Dumbbell Curls")
  x.created_at = workout_17.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_17.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Tricep Press")
  x.created_at = workout_17.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_17.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Reverse Curls")
  x.created_at = workout_17.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_17.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Skull Crushers")
  x.created_at = workout_17.created_at
  x.save
end

### Back
3.times do
  x = Lift.create(workout_id: workout_18.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Deadlifts")
  x.created_at = workout_18.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_18.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Lateral Pulldowns")
  x.created_at = workout_18.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_18.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Seated Cable Row (Close Grip)")
  x.created_at = workout_18.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_18.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Pullups")
  x.created_at = workout_18.created_at
  x.save
end


### Chest
3.times do
  x = Lift.create(workout_id: workout_19.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Bench Press")
  x.created_at = workout_19.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_19.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Dumbell Flies")
  x.created_at = workout_19.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_19.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Incline Bench Press")
  x.created_at = workout_19.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_19.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Decline Bench Press")
  x.created_at = workout_19.created_at
  x.save
end

### Shoulders
3.times do
  x = Lift.create(workout_id: workout_20.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Military Press")
  x.created_at = workout_20.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_20.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Upright Rows")
  x.created_at = workout_20.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_20.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Seated Shoulder Press")
  x.created_at = workout_20.created_at
  x.save
end

3.times do
  x = Lift.create(workout_id: workout_20.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Shrugs")
  x.created_at = workout_20.created_at
  x.save
end
