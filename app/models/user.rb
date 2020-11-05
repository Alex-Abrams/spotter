class User < ApplicationRecord
  has_secure_password

  extend FriendlyId
  friendly_id :email, use: :slugged

  # def to_param
  #   email
  # end

  has_many :body_parts,
    primary_key: :user_id,
    foreign_key: :id,
    class_name: :User
end
