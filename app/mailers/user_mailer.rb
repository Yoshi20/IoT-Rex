class UserMailer < ApplicationMailer

  def welcome_email
    @user = params[:user]
    @pw = params[:pw]
    @url = 'http://www.iot-rex.ch' #blup
    mail(to: @user.email, subject: t('users.mailer.welcome'))
  end

end
