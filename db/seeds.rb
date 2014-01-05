# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(first_name: 'john', last_name: 'doe', email: 'dude@dude.com', password: '12345678', password_confirmation: '12345678')
user.roles = ['admin', 'teacher', 'volunteer']
user.save

50.times do
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: '12345678', password_confirmation: '12345678')
end

