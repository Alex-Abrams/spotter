class Lift < ApplicationRecord

  belongs_to :workouts,
    primary_key: :id,
    foreign_key: :workout_id,
    class_name: :Workout

  belongs_to :users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
