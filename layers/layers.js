ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([632888.061238, 6849232.477016, 633128.542930, 6849388.863883]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Chteaufort_1 = new ol.format.GeoJSON();
var features_Chteaufort_1 = format_Chteaufort_1.readFeatures(json_Chteaufort_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Chteaufort_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chteaufort_1.addFeatures(features_Chteaufort_1);
var lyr_Chteaufort_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chteaufort_1, 
                style: style_Chteaufort_1,
                popuplayertitle: "Châteaufort",
                interactive: true,
                title: '<img src="styles/legend/Chteaufort_1.png" /> Châteaufort'
            });
var format_parcelles_2 = new ol.format.GeoJSON();
var features_parcelles_2 = format_parcelles_2.readFeatures(json_parcelles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_parcelles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelles_2.addFeatures(features_parcelles_2);
var lyr_parcelles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelles_2, 
                style: style_parcelles_2,
                popuplayertitle: "parcelles ",
                interactive: true,
                title: '<img src="styles/legend/parcelles_2.png" /> parcelles '
            });
var format_btileger_3 = new ol.format.GeoJSON();
var features_btileger_3 = format_btileger_3.readFeatures(json_btileger_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_btileger_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_btileger_3.addFeatures(features_btileger_3);
var lyr_btileger_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_btileger_3, 
                style: style_btileger_3,
                popuplayertitle: "bâti leger",
                interactive: true,
                title: '<img src="styles/legend/btileger_3.png" /> bâti leger'
            });
var format_rfrencepermisdeconstruire_4 = new ol.format.GeoJSON();
var features_rfrencepermisdeconstruire_4 = format_rfrencepermisdeconstruire_4.readFeatures(json_rfrencepermisdeconstruire_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_rfrencepermisdeconstruire_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rfrencepermisdeconstruire_4.addFeatures(features_rfrencepermisdeconstruire_4);
var lyr_rfrencepermisdeconstruire_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rfrencepermisdeconstruire_4, 
                style: style_rfrencepermisdeconstruire_4,
                popuplayertitle: "référence permis de construire",
                interactive: true,
    title: 'référence permis de construire<br />\
    <img src="styles/legend/rfrencepermisdeconstruire_4_0.png" /> En cours<br />\
    <img src="styles/legend/rfrencepermisdeconstruire_4_1.png" /> Terminé<br />\
    <img src="styles/legend/rfrencepermisdeconstruire_4_2.png" /> <br />'
        });
var format_btidure_5 = new ol.format.GeoJSON();
var features_btidure_5 = format_btidure_5.readFeatures(json_btidure_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_btidure_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_btidure_5.addFeatures(features_btidure_5);
var lyr_btidure_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_btidure_5, 
                style: style_btidure_5,
                popuplayertitle: "bâti dure",
                interactive: true,
                title: '<img src="styles/legend/btidure_5.png" /> bâti dure'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Chteaufort_1.setVisible(true);lyr_parcelles_2.setVisible(true);lyr_btileger_3.setVisible(true);lyr_rfrencepermisdeconstruire_4.setVisible(true);lyr_btidure_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Chteaufort_1,lyr_parcelles_2,lyr_btileger_3,lyr_rfrencepermisdeconstruire_4,lyr_btidure_5];
lyr_Chteaufort_1.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_parcelles_2.set('fieldAliases', {'section': 'section', 'numero': 'numero', });
lyr_btileger_3.set('fieldAliases', {'Type-bâti': 'Type-bâti', });
lyr_rfrencepermisdeconstruire_4.set('fieldAliases', {'N° Permis': 'N° Permis', 'Section': 'Section', 'Nature': 'Nature', 'Achèvemen': 'Achèvemen', 'Constater': 'Constater', 'Adresse': 'Adresse', });
lyr_btidure_5.set('fieldAliases', {'Type-bâti': 'Type-bâti', });
lyr_Chteaufort_1.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_parcelles_2.set('fieldImages', {'section': 'TextEdit', 'numero': 'TextEdit', });
lyr_btileger_3.set('fieldImages', {'Type-bâti': 'TextEdit', });
lyr_rfrencepermisdeconstruire_4.set('fieldImages', {'N° Permis': 'TextEdit', 'Section': 'TextEdit', 'Nature': 'TextEdit', 'Achèvemen': 'TextEdit', 'Constater': 'TextEdit', 'Adresse': '', });
lyr_btidure_5.set('fieldImages', {'Type-bâti': 'TextEdit', });
lyr_Chteaufort_1.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_parcelles_2.set('fieldLabels', {'section': 'no label', 'numero': 'no label', });
lyr_btileger_3.set('fieldLabels', {'Type-bâti': 'no label', });
lyr_rfrencepermisdeconstruire_4.set('fieldLabels', {'N° Permis': 'no label', 'Section': 'no label', 'Nature': 'no label', 'Achèvemen': 'no label', 'Constater': 'no label', 'Adresse': 'no label', });
lyr_btidure_5.set('fieldLabels', {'Type-bâti': 'no label', });
lyr_btidure_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});