<?php if(!defined('KIRBY')) exit ?>

title: Hero
pages: false
files: image
  fields: 
    bgz:
      label: <small style="font-size:.85em;color:#888;font-weight:200;">Scaling:</small>
      type: radio
      options: http://rgd2.co/clients/wilshire-skyline/public/opts.bgz.json
    bgp-x:
      type: select
      label: <small style="font-size:.85em;color:#888;font-weight:200;">Position X &amp; Y</small>
      default: center
      width: 1/2
      options: http://rgd2.co/clients/wilshire-skyline/public/opts.bgp-x.json
    bgp-y:
      label: &nbsp;
      type: select
      default: middle
      width: 1/2
      options: http://rgd2.co/clients/wilshire-skyline/public/opts.bgp-y.json
fields:

  media:
    label: Hero Image + Content
    type:  selector
    mode:  single
    autoselect: first
    types:
      - all
  text:
    type: markdown

  line1:
    type: line

  spacer2:
    width: 1/4
    type: info
  title:
    type:  text
    width: 1/2