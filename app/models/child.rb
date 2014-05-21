class Child < ActiveRecord::Base
  has_many :parents
  has_many :users, through: :parents

  scope :enrolled, -> (enrolled) { where('enrolled >= ?', enrolled) }
end