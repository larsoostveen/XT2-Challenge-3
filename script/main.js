mapboxgl.accessToken = 'pk.eyJ1IjoibGFyc29vc3R2ZWVuIiwiYSI6ImNrbWx3cml4OTAyMGwyb3BnZjNlMmNwYXEifQ.H2l-JVgsBEnqXUBTnOQ9PA';
    var map = new mapboxgl.Map({
    container: 'map',
    center: [0, 0],
    zoom: 0,
    style: 'mapbox://styles/mapbox/dark-v10'
});


document.getElementById('locatie-btn').addEventListener('click', function() {
    map.flyTo({
        center: [
            -66.309282,
            29.096707
        ],
        zoom: 5,
        essential: true, 
    }),
    document.getElementById('locatie-btn').style.display = 'none';
    document.getElementById('eten-btn').style.display = 'block';
});

map.on('load', function () {
    var key = 'a972d79cae78f2049b95a98b0d55603b';
    var stad = 'Cape Canaveral, FL, Verenigde Staten';
    var weatherLink = 'https://api.openweathermap.org/data/2.5/weather?appid=' + key + '&q=' + stad;


    fetch(weatherLink)

    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        var weatherBox = document.getElementById('weather');
        var degC = Math.floor(response.main.temp -  273.15);
        var thuisBasisPopup = new mapboxgl.Popup().setHTML(
            '<p>Het is vandaag</p>' +
            '<h1>' + degC + '&#176;C' + '</h1>' + 
            '<p>in</p>' +
            '<p>'+ stad + '</p>'
        );
        var thuisBasis = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([
            -80.5771846, 28.5619518
        ])
        .setPopup(thuisBasisPopup)
        .addTo(map);
    
    });

});

var thuisBasisLocatie = [
    -80.5771846, 
    28.5619518
];
var spaceShipLocatie = [
    -66.309282,
    29.096707
];

var route = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [thuisBasisLocatie, spaceShipLocatie]
            }
        }
    ]
};

var point = {
    'type' : 'FeatureCollection',
    'features': [{
        'type': 'Feature',
        'Properties': {},
        'Geometry': {
            'type': 'Point',
            'coordinates': thuisBasisLocatie
        }
    }]
};





map.on('load', function () {
    map.loadImage('https://static.wikia.nocookie.net/fortnite/images/b/b5/Millennium_Falcon_-_Glider_-_Fortnite.png/revision/latest?cb=20191218182757',
    function (error, image){
        if (error) throw error;
    map.addImage('starship',  image);
    map.addSource('point', {
        type: 'geojson', 
        data: {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [
                        -66.309282,
                        29.096707
                    ]
                }
            }]
        }
    });

    map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'point',
        layout: {
            'icon-image': 'starship',
            'icon-size': 0.1
        }
    });
    map.addSource('route', {
        'type': 'geojson',
        'data': route
    });
    map.addSource('places', {
        'type': 'geojson', 
        'data' :{
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties' : {
                        'description' : 
                        'Pier 220 Seafood and Grill',
                        'icon' : 'restaurant',
                        'address' : '2 A. Max Brewer Memorial Pkwy, Titusville, FL 32796, Verenigde Staten',
                        'openingtimes' : 'Open around 7',
                        'telephonenumber' : '+13212690007'
                    },
                    'geometry': {
                        'type' : 'Point',
                        'coordinates' : [
                            -80.8003046,
                            28.6194793
                        ]
                    }
                }, 
                {
                'type': 'Feature',
                'properties' : {
                    'description' : 
                    'Downtown Diner',
                    'icon' : 'restaurant',
                    'address' : '605 S Hopkins Ave, Titusville, FL 32796, Verenigde Staten',
                    'openingtimes' : 'Open around 7',
                    'telephonenumber' : '+13216030211'
                },
                    'geometry': {
                        'type' : 'Point',
                        'coordinates' : [
                            -80.8104373,
                            28.6089654
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties' : {
                        'description' : 
                        'The Heroes Grill',
                        'icon' : 'restaurant',
                        'address' : '1300 South St, Titusville, FL 32780, Verenigde Staten',
                        'openingtimes' : 'Open around 11',
                        'telephonenumber' : '+1 321-607-6739'
                    },
                    'geometry': {
                        'type' : 'Point',
                        'coordinates' : [
                            -80.8201408,
                            28.6081236
                        ]
                    }
                }, 
                {
                    'type': 'Feature',
                    'properties' : {
                        'description' : 
                        'Orleans Bistro and Bar',
                        'icon' : 'restaurant',
                        'address' : '2204 S Washington Ave, Titusville, FL 32780, Verenigde Staten',
                        'openingtimes' : 'Open around 11',
                        'telephonenumber' : '+1 321-567-7567'
                    },
                    'geometry': {
                        'type' : 'Point',
                        'coordinates' : [
                            -80.8050093,
                            28.5888465
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties' : {
                        'description' : 
                        'Dixie Crossroads',
                        'icon' : 'restaurant',
                        'address' : '1475 Garden St, Titusville, FL 32796, Verenigde Staten',
                        'openingtimes' : 'Open around 11',
                        'telephonenumber' : '+13212685000'
                    },
                    'geometry': {
                        'type' : 'Point',
                        'coordinates' : [
                            -80.8173092,
                            28.6096839
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties' : {
                        'description' : 
                        'KFC',
                        'icon' : 'restaurant',
                        'address' : '12 N Washington Ave, Titusville, FL 32796, Verenigde Staten',
                        'openingtimes' : 'Open around 10',
                        'telephonenumber' : '+13212670528'
                    },
                    'geometry': {
                        'type' : 'Point',
                        'coordinates' : [
                            -80.812881,
                            28.609648
                        ]
                    }
                }
            ]
        }
    });
    map.addLayer({
        'id': 'route',
        'source': 'route',
        'type': 'line',
        'paint': {
            'line-width': 5,
            'line-color': '#007cbf'
        }
    });
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true,
            'icon-size' : 1.5
        }
    });
})
});

document.getElementById('eten-btn').addEventListener('click', function() {
    map.flyTo({
        center: [
            -80.814537,
            28.6065267
        ],
        zoom: 13
    }),
    document.getElementById('eten-btn').style.display = 'none';
    document.getElementById('locatie-btn').style.display = 'block';
});

map.on('click', 'places', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;
    var address = e.features[0].properties.address;
    var openingtimes = e.features[0].properties.openingtimes;
    var telephonenumber = e.features[0].properties.telephonenumber;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat > coordinates[0] ? 360 : -360;
    }

    var restaurantsFloridaPopup = new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(
        '<h3>' + description + '</h3>' + 
        '<ul>' + 
            '<li>' + address + '</li>' + 
            '<li>' + openingtimes + '</li>' + 
            '<li>' + telephonenumber +'</li>' + 
        '</ul>' 
    )
    .addTo(map);
    

    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});
