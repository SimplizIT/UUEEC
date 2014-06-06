class FaqCategory < ActiveRecord::Base
  has_many :faqs, dependent: :destroy
  belongs_to :user
end
