class Uploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
  process :resize_to_fill => [300, 300]

  version :thumb do
    process :resize_to_fill => [140, 140]
  end

  version :thumbblog do
    process :resize_to_fill => [200, 110]
  end

  version :circle do
    process :resize_to_fill => [100, 100]
  end
  
  storage :file

  def store_dir
    "image_uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_white_list
    %w(jpg jpeg png)
  end
  
end