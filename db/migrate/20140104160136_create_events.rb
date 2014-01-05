class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.boolean :allDay
      t.string :description
      t.string :note
      t.date :start
      t.date :end
      t.string :url
      t.string :className
      t.boolean :editable
      t.string :color
      t.string :backgroundColor
      t.string :borderColor
      t.string :textColor
      t.belongs_to :user
      t.timestamps
    end
  end
end
