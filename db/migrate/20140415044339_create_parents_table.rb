class CreateParentsTable < ActiveRecord::Migration
  def change
    create_table :parents do |t|
      t.integer :child_id
      t.integer :user_id
      t.timestamps
    end
  end
end
