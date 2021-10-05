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
workout_1 = Workout.create(user_id: user1.id, exercise_section: "Legs")
workout_1.update_attribute :created_at, Time.new(2021, 1, 1);

workout_2 = Workout.create(user_id: user1.id, exercise_section: "Arms")
workout_2.update_attribute :created_at, Time.new(2021, 1, 1);

workout_3 = Workout.create(user_id: user1.id, exercise_section: "Back")
workout_3.update_attribute :created_at, Time.new(2021, 1, 1);

workout_4 = Workout.create(user_id: user1.id, exercise_section: "Chest")
workout_4.update_attribute :created_at, Time.new(2021, 1, 1);

workout_5 = Workout.create(user_id: user1.id, exercise_section: "Chest")
workout_5.update_attribute :created_at, Time.new(2021, 1, 1);

workout_6 = Workout.create(user_id: user1.id, exercise_section: "Back")
workout_6.update_attribute :created_at, Time.new(2021, 1, 1);

workout_7 = Workout.create(user_id: user1.id, exercise_section: "Legs")
workout_7.update_attribute :created_at, Time.new(2021, 1, 1);


workout_8 = Workout.create(user_id: user1.id, exercise_section: "Chest")
workout_8.update_attribute :created_at, Time.new(2021, 1, 1);

workout_9 = Workout.create(user_id: user1.id, exercise_section: "Back")
workout_9.update_attribute :created_at, Time.new(2021, 1, 1);

workout_10 = Workout.create(user_id: user1.id, exercise_section: "Arms")
workout_10.update_attribute :created_at, Time.new(2021, 1, 1);

workout_11 = Workout.create(user_id: user1.id, exercise_section: "Chest")
workout_11.update_attribute :created_at, Time.new(2021, 1, 1);

workout_12 = Workout.create(user_id: user1.id, exercise_section: "Legs")
workout_12.update_attribute :created_at, Time.new(2021, 1, 1);

workout_13 = Workout.create(user_id: user1.id, exercise_section: "Chest")
workout_13.update_attribute :created_at, Time.new(2021, 1, 1);

workout_14 = Workout.create(user_id: user1.id, exercise_section: "Arms")
workout_14.update_attribute :created_at, Time.new(2021, 1, 1);

workout_15 = Workout.create(user_id: user1.id, exercise_section: "Chest")
workout_15.update_attribute :created_at, Time.new(2021, 1, 1);

workout_16 = Workout.create(user_id: user1.id, exercise_section: "Back")
workout_16.update_attribute :created_at, Time.new(2021, 1, 1);

#reps_weights

# reps_weights
