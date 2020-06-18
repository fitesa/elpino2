var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SUELO_1 = new ol.format.GeoJSON();
var features_SUELO_1 = format_SUELO_1.readFeatures(json_SUELO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUELO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUELO_1.addFeatures(features_SUELO_1);
var lyr_SUELO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUELO_1, 
                style: style_SUELO_1,
                interactive: true,
    title: 'SUELO<br />\
    <img src="styles/legend/SUELO_1_0.png" /> 1<br />\
    <img src="styles/legend/SUELO_1_1.png" /> 2<br />\
    <img src="styles/legend/SUELO_1_2.png" /> 3<br />\
    <img src="styles/legend/SUELO_1_3.png" /> 4<br />'
        });
var format_EvolucinIndicedeHumedad_2 = new ol.format.GeoJSON();
var features_EvolucinIndicedeHumedad_2 = format_EvolucinIndicedeHumedad_2.readFeatures(json_EvolucinIndicedeHumedad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeHumedad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeHumedad_2.addFeatures(features_EvolucinIndicedeHumedad_2);
var lyr_EvolucinIndicedeHumedad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeHumedad_2, 
                style: style_EvolucinIndicedeHumedad_2,
                interactive: false,
    title: 'Evolución Indice de Humedad<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_2_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_2_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_2_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_2_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_2_4.png" /> Muy alto<br />'
        });
var format_IndicedeHumedad_3 = new ol.format.GeoJSON();
var features_IndicedeHumedad_3 = format_IndicedeHumedad_3.readFeatures(json_IndicedeHumedad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad_3.addFeatures(features_IndicedeHumedad_3);
var lyr_IndicedeHumedad_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad_3, 
                style: style_IndicedeHumedad_3,
                interactive: false,
    title: 'Indice de Humedad<br />\
    <img src="styles/legend/IndicedeHumedad_3_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeHumedad_3_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeHumedad_3_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeHumedad_3_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeHumedad_3_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeVegetacin_4 = new ol.format.GeoJSON();
var features_EvolucinIndicedeVegetacin_4 = format_EvolucinIndicedeVegetacin_4.readFeatures(json_EvolucinIndicedeVegetacin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeVegetacin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeVegetacin_4.addFeatures(features_EvolucinIndicedeVegetacin_4);
var lyr_EvolucinIndicedeVegetacin_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeVegetacin_4, 
                style: style_EvolucinIndicedeVegetacin_4,
                interactive: false,
    title: 'Evolución Indice de Vegetación<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_4_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_4_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_4_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_4_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_4_4.png" /> Muy alto<br />'
        });
var format_IndicedeVegetacin_5 = new ol.format.GeoJSON();
var features_IndicedeVegetacin_5 = format_IndicedeVegetacin_5.readFeatures(json_IndicedeVegetacin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacin_5.addFeatures(features_IndicedeVegetacin_5);
var lyr_IndicedeVegetacin_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacin_5, 
                style: style_IndicedeVegetacin_5,
                interactive: false,
    title: 'Indice de Vegetación<br />\
    <img src="styles/legend/IndicedeVegetacin_5_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeVegetacin_5_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeVegetacin_5_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeVegetacin_5_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeVegetacin_5_4.png" /> Muy alto<br />'
        });
var format_ABONADODECOBERTERA_6 = new ol.format.GeoJSON();
var features_ABONADODECOBERTERA_6 = format_ABONADODECOBERTERA_6.readFeatures(json_ABONADODECOBERTERA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABONADODECOBERTERA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABONADODECOBERTERA_6.addFeatures(features_ABONADODECOBERTERA_6);
var lyr_ABONADODECOBERTERA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ABONADODECOBERTERA_6, 
                style: style_ABONADODECOBERTERA_6,
                interactive: true,
                title: '<img src="styles/legend/ABONADODECOBERTERA_6.png" /> ABONADO DE COBERTERA'
            });
var format_ABONADODEFONDO_7 = new ol.format.GeoJSON();
var features_ABONADODEFONDO_7 = format_ABONADODEFONDO_7.readFeatures(json_ABONADODEFONDO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABONADODEFONDO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABONADODEFONDO_7.addFeatures(features_ABONADODEFONDO_7);
var lyr_ABONADODEFONDO_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ABONADODEFONDO_7, 
                style: style_ABONADODEFONDO_7,
                interactive: true,
                title: '<img src="styles/legend/ABONADODEFONDO_7.png" /> ABONADO DE FONDO'
            });
var format_SIEMBRA_8 = new ol.format.GeoJSON();
var features_SIEMBRA_8 = format_SIEMBRA_8.readFeatures(json_SIEMBRA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIEMBRA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIEMBRA_8.addFeatures(features_SIEMBRA_8);
var lyr_SIEMBRA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SIEMBRA_8, 
                style: style_SIEMBRA_8,
                interactive: true,
                title: '<img src="styles/legend/SIEMBRA_8.png" /> SIEMBRA'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_SUELO_1.setVisible(true);lyr_EvolucinIndicedeHumedad_2.setVisible(true);lyr_IndicedeHumedad_3.setVisible(true);lyr_EvolucinIndicedeVegetacin_4.setVisible(true);lyr_IndicedeVegetacin_5.setVisible(true);lyr_ABONADODECOBERTERA_6.setVisible(true);lyr_ABONADODEFONDO_7.setVisible(true);lyr_SIEMBRA_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_SUELO_1,lyr_EvolucinIndicedeHumedad_2,lyr_IndicedeHumedad_3,lyr_EvolucinIndicedeVegetacin_4,lyr_IndicedeVegetacin_5,lyr_ABONADODECOBERTERA_6,lyr_ABONADODEFONDO_7,lyr_SIEMBRA_8];
lyr_SUELO_1.set('fieldAliases', {'CLASE': 'CLASE', 'CEa': 'CEa', 'AREA': 'AREA', 'N': 'N', 'P': 'P', 'K': 'K', });
lyr_EvolucinIndicedeHumedad_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedad_3.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeVegetacin_4.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacin_5.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_ABONADODECOBERTERA_6.set('fieldAliases', {'id': 'id', 'area': 'area', 'UREA': 'UREA', });
lyr_ABONADODEFONDO_7.set('fieldAliases', {'id': 'id', 'area': 'area', 'ENTEC25_15': 'ENTEC25_15', 'DAP': 'DAP', });
lyr_SIEMBRA_8.set('fieldAliases', {'id': 'id', 'DENSIDAD': 'DENSIDAD', 'area': 'area', });
lyr_SUELO_1.set('fieldImages', {'CLASE': 'Range', 'CEa': 'Range', 'AREA': 'TextEdit', 'N': 'TextEdit', 'P': 'TextEdit', 'K': 'TextEdit', });
lyr_EvolucinIndicedeHumedad_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedad_3.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeVegetacin_4.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacin_5.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_ABONADODECOBERTERA_6.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'UREA': 'Range', });
lyr_ABONADODEFONDO_7.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'ENTEC25_15': 'Range', 'DAP': 'Range', });
lyr_SIEMBRA_8.set('fieldImages', {'id': 'TextEdit', 'DENSIDAD': 'Range', 'area': 'TextEdit', });
lyr_SUELO_1.set('fieldLabels', {'CLASE': 'header label', 'CEa': 'header label', 'AREA': 'header label', 'N': 'header label', 'P': 'header label', 'K': 'header label', });
lyr_EvolucinIndicedeHumedad_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedad_3.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeVegetacin_4.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacin_5.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_ABONADODECOBERTERA_6.set('fieldLabels', {'id': 'header label', 'area': 'header label', 'UREA': 'header label', });
lyr_ABONADODEFONDO_7.set('fieldLabels', {'id': 'header label', 'area': 'header label', 'ENTEC25_15': 'header label', 'DAP': 'header label', });
lyr_SIEMBRA_8.set('fieldLabels', {'id': 'header label', 'DENSIDAD': 'header label', 'area': 'header label', });
lyr_SIEMBRA_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});