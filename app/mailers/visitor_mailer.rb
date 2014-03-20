class VisitorMailer < ActionMailer::Base
  default from: "BeSimplizIT@SimplizIT.com"

  def welcome_email(user)
    @user = user
    @url = 'http://localhost:3000/users/sign_in'
    mail(to: @user.email, subject: 'UUEEC will be in touch soon')
  end
end
