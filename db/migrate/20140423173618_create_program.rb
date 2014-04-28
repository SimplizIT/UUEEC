class CreateProgram < ActiveRecord::Migration
  def change
    create_table :programs do |t|
      t.string :title, :null => false, :default => ""
      t.string :age_range, :null => false, :default => ""
      t.string :meets, :null => false, :default => ""
      t.string :number_of_teachers, :null => false, :default => ""
      t.string :child_to_staff_ratio, :null => false, :default => ""
      t.integer :annual_tuition, :null => false, :default => 0
      t.boolean :extended_day_option, :null => false, :default => true
      t.text :program_specific_information, :null => false, :default => ""
      t.hstore :program_info, :null => false, :default => {}

    end
  end
end
