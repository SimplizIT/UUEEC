class FaqCategory < ActiveRecord::Base
  has_many :faqs, dependent: :destroy
  belongs_to :user
  accepts_nested_attributes_for :faqs, reject_if: :all_blank, allow_destroy: true
end
