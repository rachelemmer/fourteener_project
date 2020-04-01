Title: Take a Hike

Description: This application allows users to browse all of Colorado's Fourteeners, search for them by name, and filter them by difficulty. They may also view the mountain's details and route information. 

Installation: This application uses: Rails version 6.0.2.1 & Ruby 2.6.1. Fork & Clone down repository, run Bundle Install, run rails DB:create, run rails DB:seed. Confirm that rails server is running on port 3000, and front-end server runs on port 3001.

Dependencies: 

gem 'rails', '~> 6.0.2', '>= 6.0.2.1'
gem 'sqlite3', '~> 1.4'
gem 'puma', '~> 4.1'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'rack-cors'
gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
gem 'listen', '>= 3.0.5', '< 3.2'
gem 'spring'
gem 'spring-watcher-listen', '~> 2.0.0'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

About this application: This application was created by Rachel Emmer. Rachel is a student at Flatiron School Software Engineering Bootcamp and an avid hiker. 