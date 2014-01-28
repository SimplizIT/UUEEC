class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :category
      t.string :title
      t.string :url
      t.timestamps
    end
  end
end
