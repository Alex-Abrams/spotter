# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'guest', password: 'password', password_confirmation: 'password', email: 'guest@guest.com')

#workouts
# "2021-05-05T20:29:52.759Z"
workout_1 = Workout.create(user_id: user1.id, exercise_section: "Legs") #
workout_1.update_attribute :created_at, Time.new(2021, 1, 1);

workout_2 = Workout.create(user_id: user1.id, exercise_section: "Arms") #
workout_2.update_attribute :created_at, Time.new(2021, 1, 1);

workout_3 = Workout.create(user_id: user1.id, exercise_section: "Back") #
workout_3.update_attribute :created_at, Time.new(2021, 1, 1);

workout_4 = Workout.create(user_id: user1.id, exercise_section: "Chest")#
workout_4.update_attribute :created_at, Time.new(2021, 1, 1);

workout_5 = Workout.create(user_id: user1.id, exercise_section: "Chest") #
workout_5.update_attribute :created_at, Time.new(2021, 1, 1);

workout_6 = Workout.create(user_id: user1.id, exercise_section: "Back") #
workout_6.update_attribute :created_at, Time.new(2021, 1, 1);

workout_7 = Workout.create(user_id: user1.id, exercise_section: "Legs") #
workout_7.update_attribute :created_at, Time.new(2021, 1, 1);


workout_8 = Workout.create(user_id: user1.id, exercise_section: "Chest") #
workout_8.update_attribute :created_at, Time.new(2021, 1, 1);

workout_9 = Workout.create(user_id: user1.id, exercise_section: "Back") #
workout_9.update_attribute :created_at, Time.new(2021, 1, 1);

workout_10 = Workout.create(user_id: user1.id, exercise_section: "Arms") #
workout_10.update_attribute :created_at, Time.new(2021, 1, 1);

workout_11 = Workout.create(user_id: user1.id, exercise_section: "Shoulders") #
workout_11.update_attribute :created_at, Time.new(2021, 1, 1);

workout_12 = Workout.create(user_id: user1.id, exercise_section: "Legs") #
workout_12.update_attribute :created_at, Time.new(2021, 1, 1);

workout_13 = Workout.create(user_id: user1.id, exercise_section: "Chest") #
workout_13.update_attribute :created_at, Time.new(2021, 1, 1);

workout_14 = Workout.create(user_id: user1.id, exercise_section: "Arms") #
workout_14.update_attribute :created_at, Time.new(2021, 1, 1);

workout_15 = Workout.create(user_id: user1.id, exercise_section: "Shoulders") #
workout_15.update_attribute :created_at, Time.new(2021, 1, 1);

workout_16 = Workout.create(user_id: user1.id, exercise_section: "Back")
workout_16.update_attribute :created_at, Time.new(2021, 1, 1);

#reps_weights
prng = Random.new

#### w1
3.times do
  Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
end
3.times do
  Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Deadlifts")
end
3.times do
  Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Lunges")
end
3.times do
  Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Calf Raises")
end
#######w2

3.times do
  Lift.create(workout_id: workout_2.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Dumbbell Curls")
end
3.times do
  Lift.create(workout_id: workout_2.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Tricep Press")
end
3.times do
  Lift.create(workout_id: workout_2.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Reverse Curls")
end
3.times do
  Lift.create(workout_id: workout_2.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Skull Crushers")
end

####w3

3.times do
  Lift.create(workout_id: workout_3.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Deadlifts")
end
3.times do
  Lift.create(workout_id: workout_3.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Lateral Pulldowns")
end
3.times do
  Lift.create(workout_id: workout_3.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Seated Cable Row (Close Grip)")
end
3.times do
  Lift.create(workout_id: workout_3.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Pullups")
end

###w4 chest

3.times do
  Lift.create(workout_id: workout_4.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Bench Press")
end
3.times do
  Lift.create(workout_id: workout_4.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Dumbbell Flies")
end
3.times do
  Lift.create(workout_id: workout_4.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Incline Bench Press")
end
3.times do
  Lift.create(workout_id: workout_4.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Decline Bench Press")
end

####w5 chest

3.times do
  Lift.create(workout_id: workout_5.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Bench Press")
end
3.times do
  Lift.create(workout_id: workout_5.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Dumbbell Flies")
end
3.times do
  Lift.create(workout_id: workout_5.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Incline Bench Press")
end
3.times do
  Lift.create(workout_id: workout_5.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Decline Bench Press")
end

### w6 back

3.times do
  Lift.create(workout_id: workout_6.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Deadlifts")
end
3.times do
  Lift.create(workout_id: workout_6.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Lateral Pulldowns")
end
3.times do
  Lift.create(workout_id: workout_6.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Seated Cable Row (Close Grip)")
end
3.times do
  Lift.create(workout_id: workout_6.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Pullups")
end

#### w7 legs
3.times do
  Lift.create(workout_id: workout_7.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
end
3.times do
  Lift.create(workout_id: workout_7.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Deadlifts")
end
3.times do
  Lift.create(workout_id: workout_7.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Lunges")
end
3.times do
  Lift.create(workout_id: workout_7.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Calf Raises")
end

####### w8 chest
3.times do
  Lift.create(workout_id: workout_8.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Bench Press")
end
3.times do
  Lift.create(workout_id: workout_8.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Dumbbell Flies")
end
3.times do
  Lift.create(workout_id: workout_8.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Incline Bench Press")
end
3.times do
  Lift.create(workout_id: workout_8.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Decline Bench Press")
end

#### w9 back
3.times do
  Lift.create(workout_id: workout_9.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Deadlifts")
end
3.times do
  Lift.create(workout_id: workout_9.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Lateral Pulldowns")
end
3.times do
  Lift.create(workout_id: workout_9.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Seated Cable Row (Close Grip)")
end
3.times do
  Lift.create(workout_id: workout_9.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Pullups")
end


#### w10 Arms
3.times do
  Lift.create(workout_id: workout_10.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Dumbbell Curls")
end
3.times do
  Lift.create(workout_id: workout_10.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Tricep Press")
end
3.times do
  Lift.create(workout_id: workout_10.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Reverse Curls")
end
3.times do
  Lift.create(workout_id: workout_10.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Skull Crushers")
end

##### w11 shoulders

3.times do
  Lift.create(workout_id: workout_11.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Military Press")
end
3.times do
  Lift.create(workout_id: workout_11.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Upright Rows")
end
3.times do
  Lift.create(workout_id: workout_11.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Seated Shoulder Press")
end
3.times do
  Lift.create(workout_id: workout_11.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Shrugs")
end

#### w12
3.times do
  Lift.create(workout_id: workout_12.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
end
3.times do
  Lift.create(workout_id: workout_12.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Deadlifts")
end
3.times do
  Lift.create(workout_id: workout_12.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Lunges")
end
3.times do
  Lift.create(workout_id: workout_12.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Calf Raises")
end

#### w13 chest
3.times do
  Lift.create(workout_id: workout_13.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Bench Press")
end
3.times do
  Lift.create(workout_id: workout_13.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Dumbbell Flies")
end
3.times do
  Lift.create(workout_id: workout_13.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Incline Bench Press")
end
3.times do
  Lift.create(workout_id: workout_13.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Chest", name: "Decline Bench Press")
end

#### w14 arms
3.times do
  Lift.create(workout_id: workout_14.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Dumbbell Curls")
end
3.times do
  Lift.create(workout_id: workout_14.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Tricep Press")
end
3.times do
  Lift.create(workout_id: workout_14.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Reverse Curls")
end
3.times do
  Lift.create(workout_id: workout_14.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Arms", name: "Skull Crushers")
end

#####w15
3.times do
  Lift.create(workout_id: workout_15.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Military Press")
end
3.times do
  Lift.create(workout_id: workout_15.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Upright Rows")
end
3.times do
  Lift.create(workout_id: workout_15.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Seated Shoulder Press")
end
3.times do
  Lift.create(workout_id: workout_15.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Shoulders", name: "Shrugs")
end

####w16
3.times do
  Lift.create(workout_id: workout_16.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Deadlifts")
end
3.times do
  Lift.create(workout_id: workout_16.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Lateral Pulldowns")
end
3.times do
  Lift.create(workout_id: workout_16.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Seated Cable Row (Close Grip)")
end
3.times do
  Lift.create(workout_id: workout_16.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Back", name: "Pullups")
end

# lift_1 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_2 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_3 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_4 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_5 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_6 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_7 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_8 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
#
# lift_9 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_10 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_11 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_12 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_13 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_14 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_15 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_16 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
#
# lift_17 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_18 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_19 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_20 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_21 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_22 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_23 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_24 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
#
# lift_25 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_26 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_27 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_28 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_29= Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_30 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_31= Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
# lift_1 = Lift.create(workout_id: workout_1.id, weight: prng.rand(50...200), reps: prng.rand(5...15), exercise_section: "Legs", name: "Squats")
#
