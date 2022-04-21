class Auth::SessionsController < DeviseTokenAuth::SessionsController

    wrap_parameters format: []
end
