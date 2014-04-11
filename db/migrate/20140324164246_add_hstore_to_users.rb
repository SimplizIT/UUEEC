class AddHstoreToUsers < ActiveRecord::Migration
  def up
    add_column :users, :settings, :hstore, default: {home_phone: nil, home_street: nil, home_city: nil, home_state: nil, zip: nil}
  end

  def down
    remove_column :users, :settings
  end
end
