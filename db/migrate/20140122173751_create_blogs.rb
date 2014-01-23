class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :body
      t.belongs_to :user
      t.integer :views
      t.string :image

      t.timestamps
    end
  end
end
