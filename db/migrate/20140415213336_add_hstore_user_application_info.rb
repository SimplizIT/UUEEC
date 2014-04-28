class AddHstoreUserApplicationInfo < ActiveRecord::Migration
  def up
    add_column :users, :application_info, :hstore, default: { a_skills: '', b_custody: '', c_member_uua: '', d_find_us: ''}
  end

  def down
    remove_column :users, :work_address
  end
end
