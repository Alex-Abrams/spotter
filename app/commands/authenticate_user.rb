class AuthenticateUser
  prepend SimpleCommand

  def initialize(username, password)  # CETU
    @username = username                  # CETU
    @password = password
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :username, :password     # CETU

  def user
    # user = User.find_by_email(email)      # CETU
    user = User.find_by(username: username)  # WORKS DO THIS WITH USERNAME 
    return user if user && user.authenticate(password)

    errors.add :user_authentication, 'invalid credentials'
    nil
  end
end
