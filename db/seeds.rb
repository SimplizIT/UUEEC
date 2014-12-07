# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'faker'

userRoles = ['admin', 'staff', 'member']

user_one = User.create(first_name: 'john', last_name: 'doe', email: 'dude@dude.com', password: '12345678', password_confirmation: '12345678')

User.create(first_name: 'test', last_name: 'test', email: 'test@test.com', password: '12345678', password_confirmation: '12345678')

# 50.times do
#   User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: '12345678', password_confirmation: '12345678')
# end
#
# users = User.all
#
# users.each do |user|
#   user.roles = userRoles.sample(rand(0..3))
#   user.save
# end
#
user_one = User.find_by_email('dude@dude.com')
user_one.roles = userRoles
user_one.save
#
# user = User.find_by_email('test@test.com')
# user.roles = userRoles
# user.save
#
# imagenames = Dir.glob('public/image_uploads/blog/image/**/*.{png,JPG,jpg,JPEG,jpeg,PNG}')
# images = []
# imagenames.each do |image|
#   images.push(image.split('/').last)
# end
# images.delete_if { |image| image.include?('thumb') || image.include?('circle_')}
#
# users.each do |user|
#   if user.is?('admin') || user.is?('teacher')
#     user.blogs.create(title: Faker::Lorem.words(num = rand(2..5)).join(' '), body: Faker::Lorem.paragraphs(paragraph_count = rand(3..5)).join(' '), views: rand(0..1000), image: images.sample )
#   end
# end

linkHash = { 'Unitarian Universalist Congregation of Phoenix' => 'www.phoenixuu.org', 'National Association for the Education of Young Children (NAEYC)' => 'www.naeyc.org', 'AZ Department of Health, Office of Childcare Licensing' => 'www.azdhs.gov/als/childcare', 'Wolf Trap Arts in Education' => 'www.wolf-trap.org/institute', 'Zero to Three' => 'www.zerotothree.org/ztt_parents.html' }
linkHash.each do |key, value|
  Link.create(category: 'knowledge', title: key, url: value)
end
