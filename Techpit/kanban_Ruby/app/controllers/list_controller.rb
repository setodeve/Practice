class ListController < ApplicationController
  before_action :set_list, only: %i(edit update destroy)
  before_action :set_list, only: %i(order_update)


  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to :root
    else
      render action: :new
    end
  end

  def edit
  end

  def update
    if @list.update_attributes(list_params)
      redirect_to :root
    else
      render action: :edit
    end
  end
  
  def order_update

    if @list.order
      @list.order = false
    else
      @list.order = true
    end
    if @list.save
      redirect_to :root
    else
      redirect_to :root
    end
  end

  def destroy
    @list.destroy
    redirect_to :root
  end

  private
    def list_params
      params.require(:list).permit(:title).merge(user: current_user)
    end

    def order_param
      if @list.order == true
        @list.order = false
      else
        @list.order = true
      end
    end

    def set_list
      @list = List.find(params[:id])
    end
end
