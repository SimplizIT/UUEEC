class Visitor < ActiveRecord::Base
  serialize :ages

  before_save :cleanagesarray

  def cleanagesarray
    self.ages.reject! { |element| element.empty? }
  end
end
