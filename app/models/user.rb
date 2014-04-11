class User < ActiveRecord::Base
  has_many :obligations
  has_many :bugs
  has_many :events
  has_many :blogs

  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h

  mount_uploader :image, Uploader
  after_update :crop_image

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ROLES = ['admin', 'staff', 'member']

  def roles=(roles)
    self.roles_mask = (roles & ROLES).map { |r| 2**ROLES.index(r) }.inject(0, :+)
    if roles.include?('staff')
      self.add_staff_to_hstore
    else
      self.remove_staff_from_hstore
    end
  end

  def roles
    ROLES.reject do |r|
      ((roles_mask.to_i || 0) & 2**ROLES.index(r)).zero?
    end
  end

  def is?(role)
    roles.include?(role.to_s)
  end

  def add_staff_to_hstore
    work = {job_title: '', work_phone: '', work_street: '', work_city: '', work_state: '', work_zip: ''}
    work.each_pair do |key, value|
      self.settings[key] = value
    end
    self.settings_will_change!
    self.save
  end

  def remove_staff_from_hstore
    work = {job_title: '', work_phone: '', work_street: '', work_city: '', work_state: '', work_zip: ''}
    work.each_pair do |temp_key, temp_value|
      self.settings.delete_if { |key, value| key if key == temp_key.to_s }
    end
    self.settings_will_change!
    self.save
  end
end

def crop_image
    if crop_x.present?
    mini_magick = MiniMagick::Image.open(self.image.path)
    crop_params = "#{crop_w}x#{crop_h}+#{crop_x}+#{crop_y}"
    mini_magick.crop(crop_params)
    mini_magick.write(self.image.large.path)
    mini_magick.write(self.image.pinhead.path)
  end
end