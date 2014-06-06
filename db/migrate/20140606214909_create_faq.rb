class CreateFaq < ActiveRecord::Migration
  def change
    create_table :faqs do |t|
      t.text :question,         :null => false, :default => ""
      t.text :answer,          :null => false, :default => ""
      t.belongs_to :faq_category
      t.timestamps 
    end
  end
end
