class AddWorkHstoreToUser < ActiveRecord::Migration
  def up
    add_column :users, :work_address, :hstore, default: { a_work_title: '', b_work_phone: '', c_work_street: '', d_work_city: '', e_work_state: '', f_work_zip: '', g_work_occupation: '', h_work_employer: ''}
  end

  def down
    remove_column :users, :work_address
  end
end