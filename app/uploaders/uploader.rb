class Uploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick




  process :resize_to_limit => [800, 800]

  version :large do
    process :resize_to_fill => [180, 180]
  end

  storage :file

  def store_dir
    "image_uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_white_list
    %w(jpg jpeg png)
  end

  protected

  version :thumb, :if => :is_blog? do
    process :resize_to_fit => [200, 110]
  end

  version :largeDisplay, :if => :is_blog? do
    process :resize_to_fill => [800, 200]
  end

  version :pinhead, :if => :is_user? do
    process :resize_to_fill => [28, 28]
  end

  def is_user? image
    model.class.name == 'User'
  end

  def is_blog? image
    model.class.name == 'Blog'
  end
end
