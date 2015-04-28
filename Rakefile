require 'dbf'

task default: %w[all]

task :download do
  `wget -P data http://slavevoyages.org/downloads/tastdb-2010.csv`
  `wget -P data http://slavevoyages.org/downloads/tastdb-2010.dbf`
  `wget -P data http://www.slavevoyages.org/downloads/Codebook2010.pdf`
end

namespace :dbf do
  task :schema do
    `dbf -a data/tastdb-2010.dbf > schema.rb`
  end

  task :data do
    `dbf -c data/tastdb-2010.dbf > tastdb_dbf.csv`
  end
end
task :all => [:download]
