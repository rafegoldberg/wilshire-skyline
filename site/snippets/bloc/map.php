<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
<script id="map-init">
	var map,
		mapstyle = [
		    {
		        "featureType": "all",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "saturation": 36
		            },
		            {
		                "color": "#333333"
		            },
		            {
		                "lightness": 40
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#ffffff"
		            },
		            {
		                "lightness": 16
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#006fae"
		            },
		            {
		                "lightness": 20
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#fefefe"
		            },
		            {
		                "lightness": 17
		            },
		            {
		                "weight": 1.2
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.country",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.province",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#062743"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.province",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.locality",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "color": "#062743"
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.locality",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.neighborhood",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            },
		            {
		                "color": "#fcfcfc"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.land_parcel",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.man_made",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#0e3759"
		            },
		            {
		                "lightness": "9"
		            },
		            {
		                "gamma": "1"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#0e3759"
		            },
		            {
		                "lightness": "18"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#0e3759"
		            },
		            {
		                "lightness": "18"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#006fae"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#e9e9e9"
		            },
		            {
		                "lightness": 17
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#0e3759"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    }
		],
		brooklyn = new google.maps.LatLng(40.6743890, -73.9455),
		MY_MAPTYPE_ID = 'custom_style'
	;
	function initialize() {
		var featureOpts = mapstyle;
		var mapOptions = {
			zoom: 12,
			center: brooklyn,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
			},
			mapTypeId: MY_MAPTYPE_ID
		};

		map = new google.maps.Map(document.getElementById('map-canvas'),
				mapOptions);

		var styledMapOptions = {
			name: 'Custom Style'
		};
		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
</script>
<div id="map-wrap">
	<div id="map-canvas"></div>
</div>
<style>
	#map-wrap {
		position: relative;
		display: block;
		height: 50vh;
		width: 100%;
		margin: 0px;
		padding: 0px;
		overflow: hidden;
		pointer-events: none;
	}
	#map-canvas {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		height: 100%;
		width: 100%;
		margin: -50px 0 0 -50px;
		padding: 50px;
	}
</style>