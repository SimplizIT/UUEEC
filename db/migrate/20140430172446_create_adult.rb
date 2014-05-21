class CreateAdult < ActiveRecord::Migration
  def change
    create_table :adults do |t|
      t.string :first_name,         :null => false, :default => ""
      t.string :last_name,          :null => false, :default => ""
      t.string :primary_phone, :null => false, :default => ""
      t.date :birthdate
      t.string :relationship, :null => false, :default => ""
      t.boolean :can_pickup, :null => false, :default => false
      t.belongs_to :user
    end
  end
end
