<?php if(!defined('KIRBY')) exit ?>

title: Page
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea
  location:
    label: Location
    type: place
    center:
      lat: 45.5230622
      lng: -122.67648159999999
      zoom: 13
    help: >
      Lookup a location or drag the pin.