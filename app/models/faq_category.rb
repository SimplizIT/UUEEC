class FaqCategory < ActiveRecord::Base
  has_many :faqs, dependent: :destroy
  belongs_to :user
  validates_format_of :name, with: /\A(^[a-z]{4,25}$)\z/i
  accepts_nested_attributes_for :faqs, reject_if: :all_blank, allow_destroy: true
end
