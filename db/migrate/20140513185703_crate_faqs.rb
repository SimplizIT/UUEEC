class CrateFaqs < ActiveRecord::Migration
  def change
    create_table :faqs do |t|
      t.text :question,         :null => false, :default => ""
      t.string :answer,          :null => false, :default => ""
      t.timestamps 
    end
  end
end
