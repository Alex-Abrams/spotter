class BodyPart < ApplicationRecord
  has_many :workouts,
    primary_key: :id,
    foreign_key: :body_part_id,
    class_name: :BodyPart
end
