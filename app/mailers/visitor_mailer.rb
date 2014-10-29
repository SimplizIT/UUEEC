class VisitorMailer < ActionMailer::Base
  default from: "EECDirector@PhoenixUU.org"

  def welcome_email(user)
    @user = user
    @url = 'http://http://shielded-inlet-8919.herokuapp.com/users/sign_up'
    mail(to: @user.email, subject: 'We\'ll be in touch!')
  end
end
