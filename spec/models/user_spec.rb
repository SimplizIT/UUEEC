require "rails_helper"


describe User do

  let(:user) { User.create!(email: 'hello@isitmeyourlooking.for', password: '12345678')}

  it "should have an email address" do
    expect(user).to be_valid
  end

  # it "email address cannot be saved when incorrect format" do
  #   expect(user).not_to be_valid
  # end
end