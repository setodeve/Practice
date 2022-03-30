class UserController < ApplicationController
  before_action :user_list, only: %i(edit update)

  def edit
  end

  def update
    if @user.update_attributes(list_params)
      redirect_to :root
    else
      render action: :edit
    end
  end
  
  private
    def list_params
      params.require(:user).permit(:name)
    end

    def user_list
      @user = User.find(params[:id])
    end
end
