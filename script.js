require(["esri/config","esri/Map", "esri/views/MapView","esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/layers/FeatureLayer", "esri/WebMap",
         "esri/core/urlUtils","esri/layers/CSVLayer"], 
      
        function (esriConfig, Map, MapView, BasemapToggle, BasemapGallery, FeatureLayer, WebMap, urlUtils, CSVLayer){
  
  //csv files require CORS enabled server if not on same domain as your website - so proxy required//
  var url = "https://raw.githubusercontent.com/gbrunner/Advanced_Python_for_GIS_and_RS/master/Week%202/stl_crime_wgs_84.csv"
  esriConfig.request.corsEnabledServers.push('https://rawgit.com');
  
  
  const template = {
    title: "Crime Index",
    content: "Crime" 
  };
  
  const csvLayer = new CSVLayer({
    url: url,
    copyright: "Crime in STL",
    popupTemplate: template
  });
  
  var symbol = {
    type: "simple-marker",
    color: "green",
    size: 2
  };
  
  csvLayer.renderer = {
    type: "simple", //SimpleRenderer()
    symbol: symbol
  };
  
  const map = new Map({
          basemap: "arcgis-nova", // Basemap layer service
          layers: [csvLayer]
        });
  
  
  var view = new MapView({
    map: map,
    container: "viewDiv",
    zoom: 6,
    center: [-90.1994,38.6270]
    
  });
});
