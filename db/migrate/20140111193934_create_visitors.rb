class CreateVisitors < ActiveRecord::Migration
  def change
    create_table :visitors do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.integer :numkids
      t.text :ages
      t.text :howfindus
      t.timestamps
    end
  end
end
