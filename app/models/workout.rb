class Workout < ApplicationRecord

  has_many :lifts,
    primary_key: :id,
    foreign_key: :workout_id,
    class_name: :Workout

  belongs_to :body_parts,
    primary_key: :id,
    foreign_key: :body_part_id,
    class_name: :BodyPart

end
