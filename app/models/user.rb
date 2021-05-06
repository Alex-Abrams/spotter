class User < ApplicationRecord
  has_secure_password

  extend FriendlyId
  friendly_id :email, use: :slugged

  # def to_param
  #   email
  # end

  has_many :workouts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Workout
end
