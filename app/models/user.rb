class User < ActiveRecord::Base
  has_many :obligations
  has_many :bugs
  has_many :events
  has_many :blogs

  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h

  mount_uploader :image, Uploader
  before_save :add_settings_to_hstore
   after_update :crop_image

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ROLES = ['admin', 'staff', 'member']

  def roles=(roles)
    self.roles_mask = (roles & ROLES).map { |r| 2**ROLES.index(r) }.inject(0, :+)
  end

  def roles
    ROLES.reject do |r|
      ((roles_mask.to_i || 0) & 2**ROLES.index(r)).zero?
    end
  end

  def is?(role)
    roles.include?(role.to_s)
  end

  def add_settings_to_hstore
    self.settings = {info: {phone: nil, address: {street: nil, city: nil, state: nil, zip: nil}}}
  end
end


def crop_image
    if crop_x.present?
      mini_magick = MiniMagick::Image.open(self.image.path)
      crop_params = "#{crop_w}x#{crop_h}+#{crop_x}+#{crop_y}"
      mini_magick.crop(crop_params)
      mini_magick.write(self.image.large.path)
    end
  end