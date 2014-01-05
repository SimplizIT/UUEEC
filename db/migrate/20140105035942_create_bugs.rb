class CreateBugs < ActiveRecord::Migration
  def change
    create_table :bugs do |t|
      t.string :title
      t.string :browser
      t.string :browser_version
      t.text :error
      t.integer :security_level
      t.boolean :resolved
      t.belongs_to :user
      t.timestamps
    end
  end
end
