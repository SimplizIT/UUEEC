class AddHstoreToUsers < ActiveRecord::Migration
  def up
    add_column :users, :home_address, :hstore, default: {a_home_phone: '', b_home_street: '', c_home_city: '', d_home_state: '', e_home_zip: ''}
  end

  def down
    remove_column :users, :home_address
  end
end