class User < ApplicationRecord
  has_secure_password

validates :email, uniqueness: true
validates :username, uniqueness: true


  extend FriendlyId
  friendly_id :email, use: :slugged

  has_many :workouts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Workout

  has_many :lifts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Lift

end
