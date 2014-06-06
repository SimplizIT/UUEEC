class User < ActiveRecord::Base
  has_many :obligations
  has_many :bugs
  has_many :events
  has_many :blogs
  has_many :parents
  has_many :children, through: :parents
  has_many :adults
  has_many :faq_categories
  accepts_nested_attributes_for :children, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :events, allow_destroy: true
  accepts_nested_attributes_for :blogs, allow_destroy: true
  accepts_nested_attributes_for :obligations, allow_destroy: true
  accepts_nested_attributes_for :adults, reject_if: :all_blank, allow_destroy: true

  # attr_accessor :crop_x, :crop_y, :crop_w, :crop_h

  mount_uploader :image, Uploader
  after_update :crop_image
  before_create :add_guest_role

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ROLES = ['admin', 'staff', 'member', 'guest']

  def roles=(roles)
    self.roles_mask = (roles & ROLES).map { |r| 2**ROLES.index(r) }.inject(0, :+)
    if roles.include?('staff') || roles.include?('admin')
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

  def add_guest_role
    self.roles.push('guest')
  end

  def add_staff_to_hstore
    work = { a_work_title: '', b_work_phone: '', c_work_street: '', d_work_city: '', e_work_state: '', f_work_zip: '', g_work_occupation: '', h_work_employer: ''}
    work.each_pair do |key, value|
      self.work_address[key] = value
    end
    self.work_address_will_change!
    self.save
  end

  def remove_staff_from_hstore
    work = { a_work_title: '', b_work_phone: '', c_work_street: '', d_work_city: '', e_work_state: '', f_work_zip: ''}
    work.each_pair do |temp_key, temp_value|
      self.work_address.delete_if { |key, value| key if key == temp_key.to_s }
    end
    self.work_address_will_change!
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