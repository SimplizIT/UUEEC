class CreateObligations < ActiveRecord::Migration
  def change
    create_table :obligations do |t|
      t.string :title
      t.boolean :allDay
      t.string :description
      t.string :note
      t.datetime :start
      t.datetime :end
      t.string :url
      t.string :className
      t.boolean :editable
      t.string :color
      t.string :backgroundColor
      t.string :borderColor
      t.string :textColor
      t.belongs_to :user
      t.boolean :swapped, default: false
      t.boolean :up_for_swap, default: false
      t.timestamps
    end
  end
end
