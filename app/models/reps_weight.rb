class RepsWeight < ApplicationRecord

  belongs_to :lift,
    primary_key: :id,
    foreign_key: :lift_id,
    class_name: :Lift

end
