function map1() {
    if ($('#map1').length) {

        var marker;
        var styledMapType = new google.maps.StyledMapType(
            [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        { "saturation": 36 },
                        { "color": "#333333" },
                        { "lightness": 40 }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#f0efe9" },
                        { "lightness": 16 }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{ "visibility": "off" }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#fefefe" },
                        { "lightness": 20 }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "color": "#fefefe" },
                        { "lightness": 17 },
                        { "weight": 1.2 }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#e7e3d9" },
                        { "lightness": 20 }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#edeae1" },
                        { "lightness": 21 }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#edeae1" },
                        { "lightness": 21 }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#f0efe9" },
                        { "lightness": 17 }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "color": "#ffffff" },
                        { "lightness": 29 },
                        { "weight": 0.2 }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#f0efe9" },
                        { "lightness": 18 }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#f0efe9" },
                        { "lightness": 16 }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#f0efe9" },
                        { "lightness": 19 }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#c1bdb5" },
                        { "lightness": 17 }
                    ]
                }
            ],
            { name: 'Styled Map' }
        );

        // Coordenadas de Ambato, Ecuador
        var mapCenter = { lat: -1.254340, lng: -78.622850 };
        var mrk1 = { lat: -1.254340, lng: -78.622850 };

        // Crear el mapa centrado en Ambato
        var map = new google.maps.Map(document.getElementById('map1'), {
            zoom: 16,
            center: mapCenter,
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
            }
        });

        // Asignar el estilo personalizado al mapa
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        // Crear el marcador en Ambato
        var marker = new google.maps.Marker({
            position: mrk1,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Ambato, Ecuador',
            icon: 'images/mrk1.png' // Asegúrate de que esta ruta sea válida
        });

        marker.addListener('click', toggleBounce);
    }

    // Función para animar el marcador
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
}

// Inicializar el mapa
map1();
