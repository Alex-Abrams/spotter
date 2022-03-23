class User < ApplicationRecord
  has_secure_password

# validates :email, uniqueness: true
# validates :username, uniqueness: true
# so below.. sorta works i just cant seem to get it to send via json...
validates :username,
  :presence => true,
  :uniqueness => { :message => "is taken"}

validates :email,
  :presence => true,
  :uniqueness => { :message => "is taken"}


  extend FriendlyId
  # friendly_id :email, use: :slugged ## CETU
  friendly_id :username, use: :slugged

  has_many :workouts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Workout

  has_many :lifts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Lift

end
