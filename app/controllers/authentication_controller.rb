class AuthenticationController < ApplicationController
 skip_before_action :authenticate_request, except: [:create] #removed create

 def authenticate
   command = AuthenticateUser.call(params[:username], params[:password])  # CETU

   if command.success?
     render json: { auth_token: command.result }
   else
     render json: { error: command.errors }, status: :unauthorized
   end
 end
end
