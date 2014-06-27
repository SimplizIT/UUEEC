# -*- encoding: utf-8 -*-
# stub: bootstrap-on-rails 0.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "bootstrap-on-rails"
  s.version = "0.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Jason Torres"]
  s.date = "2013-12-04"
  s.description = "A simpler implementation of bootstrap 3 for Rails. No bloat. Just the assets."
  s.email = ["jason.e.torres@gmail.com"]
  s.homepage = "http://github.com/jasontorres/bootstrap-on-rails"
  s.licenses = ["Apache v2"]
  s.rubyforge_project = "bootstrap-on-rails"
  s.rubygems_version = "2.2.2"
  s.summary = "A simplified Bootstrap 3 For Rails"

  s.installed_by_version = "2.2.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<less-rails>, [">= 0"])
    else
      s.add_dependency(%q<less-rails>, [">= 0"])
    end
  else
    s.add_dependency(%q<less-rails>, [">= 0"])
  end
end
