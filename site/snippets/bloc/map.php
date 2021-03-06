<section id="map-wrap" class="d-ib ta-c actionBox__soft" style="width: 100%; box-sizing: border-box;">
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
	<script id="map-init">
		var map,
			/*=LIGHT
			mapstyle = [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
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
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
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
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
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
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "-36"
            },
            {
                "weight": "0.01"
            },
            {
                "gamma": "1.75"
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
                "saturation": "-100"
            },
            {
                "lightness": "-100"
            },
            {
                "gamma": "0.00"
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
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
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
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
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
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
],
			*/
			/*=BLUE*/
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
			point = new google.maps.LatLng(34.0635023,-118.3686175),
			MY_MAPTYPE_ID = 'custom_style'
		;
		function initialize() {
			var featureOpts = mapstyle;
			var mapOptions = {
				zoom: 15,
				center: point,
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
	<div class="pad5Z pad3V size3 ta-l ta-c-m">
		<h3 class="header // size9 // ta-c-m">Get in touch</h3>
		<hr class="expand">
		<ul class="list__inline list__inline__collapse // d-b-m // ta-c">
			<li class="list--item // ta-c ta-l-m //">
				<a href="https://www.google.com/maps/preview?q=6404+Wilshire+Blvd.+LA+CA" class="icon-location // tooltip" title="6404 Wilshire Blvd. LA CA">
					<small class="d-b d-n-m // gutter-top // sizeReset9" style="vertical-align:.25em;">Visit</small>
				</a>
			</li>
			<li class="list--item // ta-c ta-l-m //">
				<a href="tel:3236511000" class="icon-phone-left // tooltip" title="(323) 651-1000">
					<small class="d-b d-n-m // gutter-top // sizeReset9" style="vertical-align:.25em;">Call</small>
				</a>
			</li>
			<li class="list--item // ta-c ta-l-m //">
				<a href="mailto:management@wilshireskyline.com" class="icon-mail-simple // tooltip" title="management@wilshireskyline.com">
					<small class="d-b d-n-m // gutter-top // sizeReset9" style="vertical-align:.25em;">Write</small>
				</a>
			</li>
		</ul>
	</div>
	<div id="map-canvas"></div>
	<style>
		#map-wrap {
			position: relative;
			display: block;
			width: 100%;
			margin: 0px;
			padding: 0px;
			overflow: hidden;
			background-color: rgba(255, 255, 255, .15); /*MAPSTYLE:LIGHT*/
			background-color: rgba(4, 34, 62, 0.75); /*MAPSTYLE:BLUE*/
			color: white; /*MAPSTYLE:BLUE*/
			-webkit-box-shadow: inset 0 10px 20px -15px #000;
			-moz-box-shadow: inset 0 10px 20px -15px #000;
			-ms-box-shadow: inset 0 10px 20px -15px #000;
			-o-box-shadow: inset 0 10px 20px -15px #000;
			box-shadow: inset 0 10px 20px -15px #000;
		}
		#map-canvas {
			z-index: -1;
			position: absolute;
			top: 0;
			left: 0;
			display: block;
			height: 100%;
			width: 100%;
			margin: -100px 0 0 -100px;
			padding: 100px;
			pointer-events: none;
		}
	</style>
</section>