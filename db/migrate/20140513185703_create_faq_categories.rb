class CreateFaqCategories < ActiveRecord::Migration
  def change
    create_table :faq_categories do |t|
      t.string :name, :null => false, :default => ""
      t.belongs_to :user
      t.timestamps
    end
  end
end