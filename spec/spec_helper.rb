# require 'rspec'
# require 'capybara/rspec'

# RSpec.configure do |config|
#   config.expect_with :rspec do |expectations|
#     expectations.include_chain_clauses_in_custom_matcher_descriptions = true
#   end
#
#   config.mock_with :rspec do |mocks|
#     mocks.verify_partial_doubles = true
#   end
#
#   config.shared_context_metadata_behavior = :apply_to_host_groups
# end


require 'rspec'
require 'capybara/rspec'

require 'middleman-core'
require 'middleman-core/rack'
require 'middleman-autoprefixer'
require 'middleman-livereload'

middleman_app = ::Middleman::Application.new

Capybara.app = ::Middleman::Rack.new(middleman_app).to_app do
  set :root, File.expand_path(File.join(File.dirname(__FILE__), '..'))
  set :environment, :development
  set :show_exceptions, false
end
