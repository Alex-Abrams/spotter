class Lift < ApplicationRecord

  # has_many :reps_weights,
  #   primary_key: :id,
  #   foreign_key: :lift_id,
  #   class_name: :RepsWeight
  #
  belongs_to :workouts,
    primary_key: :id,
    foreign_key: :workout_id,
    class_name: :Workout

  belongs_to :users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
