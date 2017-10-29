# -*- encoding: utf-8 -*-
# stub: devise_token_auth 0.1.42 ruby lib

Gem::Specification.new do |s|
  s.name = "devise_token_auth".freeze
  s.version = "0.1.42"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Lynn Hurley".freeze]
  s.date = "2017-05-17"
  s.description = "For use with client side single page apps such as the venerable https://github.com/lynndylanhurley/ng-token-auth.".freeze
  s.email = ["lynn.dylan.hurley@gmail.com".freeze]
  s.homepage = "http://github.com/lynndylanhurley/devise_token_auth".freeze
  s.licenses = ["WTFPL".freeze]
  s.rubygems_version = "2.6.13".freeze
  s.summary = "Token based authentication for rails. Uses Devise + OmniAuth.".freeze

  s.installed_by_version = "2.6.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rails>.freeze, ["< 6"])
      s.add_runtime_dependency(%q<devise>.freeze, ["<= 4.3", "> 3.5.2"])
      s.add_development_dependency(%q<sqlite3>.freeze, ["~> 1.3"])
      s.add_development_dependency(%q<pg>.freeze, [">= 0"])
      s.add_development_dependency(%q<mysql2>.freeze, [">= 0"])
    else
      s.add_dependency(%q<rails>.freeze, ["< 6"])
      s.add_dependency(%q<devise>.freeze, ["<= 4.3", "> 3.5.2"])
      s.add_dependency(%q<sqlite3>.freeze, ["~> 1.3"])
      s.add_dependency(%q<pg>.freeze, [">= 0"])
      s.add_dependency(%q<mysql2>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<rails>.freeze, ["< 6"])
    s.add_dependency(%q<devise>.freeze, ["<= 4.3", "> 3.5.2"])
    s.add_dependency(%q<sqlite3>.freeze, ["~> 1.3"])
    s.add_dependency(%q<pg>.freeze, [">= 0"])
    s.add_dependency(%q<mysql2>.freeze, [">= 0"])
  end
end
