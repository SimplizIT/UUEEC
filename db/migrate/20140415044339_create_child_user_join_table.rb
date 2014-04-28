class CreateChildUserJoinTable < ActiveRecord::Migration
  def change
    create_table :children_users do |t|
      t.integer :child_id
      t.integer :user_id
      t.timestamps
    end
  end
end
