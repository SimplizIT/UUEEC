class DeviseCreateUsers < ActiveRecord::Migration
  def change
    create_table(:users) do |t|
      ## Database authenticatable
      t.string :first_name,         :null => false, :default => ""
      t.string :last_name,          :null => false, :default => ""
      t.string :email,              :null => false, :default => ""
      t.integer :roles_mask
      t.string :encrypted_password, :null => false, :default => ""
      
      #user image
      t.string :image

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, :default => 0, :null => false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      #Used with photo cropping
      t.integer :crop_x
      t.integer :crop_y
      t.integer :crop_w
      t.integer :crop_h

      t.string :primary_phone, :null => false, :default => ""
      t.string :secondary_phone, :null => false, :default => ""
      t.string :home_street, :null => false, :default => ""
      t.string :home_city, :null => false, :default => ""
      t.string :home_state, :null => false, :default => ""
      t.string :home_zip, :null => false, :default => ""

      t.string :work_title, :null => false, :default => ""
      t.string :occupation, :null => false, :default => ""
      t.string :employer, :null => false, :default => ""
      t.string :work_phone, :null => false, :default => ""
      t.string :work_street, :null => false, :default => ""
      t.string :work_city, :null => false, :default => ""
      t.string :work_state, :null => false, :default => ""
      t.string :work_zip, :null => false, :default => ""
      
      t.string :useful_skills, :null => false, :default => ""
      t.string :custody, :null => false, :default => ""
      t.boolean :uua_member, :null => false, :default => false
      t.string :find_us, :null => false, :default => ""

      t.string :best_contact, :null => false, :default => ""
      t.boolean :share_contact_info, :null => false, :default => false
      ## Confirmable
      # t.string   :confirmation_token
      # t.datetime :confirmed_at
      # t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, :default => 0, :null => false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at


      t.timestamps
    end

    add_index :users, :email,                :unique => true
    add_index :users, :reset_password_token, :unique => true
    # add_index :users, :confirmation_token,   :unique => true
    # add_index :users, :unlock_token,         :unique => true
  end
end
