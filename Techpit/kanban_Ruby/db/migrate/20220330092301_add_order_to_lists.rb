class AddOrderToLists < ActiveRecord::Migration[6.0]
  def change
    add_column :lists, :order, :boolean, default: false, null: false
  end
end
