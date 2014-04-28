class CreateChild < ActiveRecord::Migration
  def change
    create_table :children do |t|
      t.string :first_name, :null => false, :default => ""
      t.string :last_name, :null => false, :default => ""
      t.string :nickname, :null => false, :default => ""
      t.datetime :birthdate, :null => false, :default => 'NOW()'
      t.boolean :vaccinations_current, :null => false, :default => false
      t.boolean :vaccination_waiver, :null => false, :default => false
      t.boolean :enrolled, :null => false, :default => false
      t.integer :program_id
      t.text :child_custody, :null => false, :default => ""
      t.text :info, :null => false, :default => ""
      t.hstore :application_info, :null => false, default: {}
    end
  end
end
