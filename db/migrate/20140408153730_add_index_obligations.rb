class AddIndexObligations < ActiveRecord::Migration
  def change
    add_index :obligations, [:user_id, :all_date], unique: true
  end
end
