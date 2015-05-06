require 'dbf'

task default: %w[all]

layers = %w[
  geonode:slave_trade_ports_f3r
  geonode:leg_1_final_f
  geonode:leg_2_final_f
  geonode:leg_3_final_f
  geonode:ports_purchase_confident_8g1
  geonode:ports_departure_confident_wsx
  geonode:ports_return_confident_g3t
]



type = "SHAPE-ZIP" # json
#type = "json" # json


base = "http://worldmap.harvard.edu/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature&outputformat=#{type}&typeName="

task :download do

  layers.each do |layer|
    puts "#{base}#{layer}"
  end

  #`wget -P data http://slavevoyages.org/downloads/tastdb-2010.csv`
  #`wget -P data http://slavevoyages.org/downloads/tastdb-2010.dbf`
  #`wget -P data http://www.slavevoyages.org/downloads/Codebook2010.pdf`
end


namespace :postgis do
  task :convert do
    Dir.foreach('data/') {|dir| puts `shp2pgsql -I -s 4326 data/#{dir}/#{dir}.shp #{dir} > sql/#{dir}.sql` unless dir.include? '.'}
  end
end

namespace :mysql do
  task :convert do
    Dir.foreach('data/') {|dir| puts "ogr2ogr -f MySQL MySQL:voyages,user=root,password=root -f 'ESRI Shapefile' data/#{dir.delete(' ')}/#{dir.delete(' ')}.shp -nln #{dir} -update -overwrite -lco GEOMETRY_NAME=SHAPE2 " unless dir.include? '.'}
  end
end


#task :clean do
  #FileUtils.rm_rf('data')
  #FileUtils.mkdir('data')
#end


task :all => [:download]
