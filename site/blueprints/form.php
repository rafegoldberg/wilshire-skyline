<?php if(!defined('KIRBY')) exit ?>

title: Form
pages: false
files: false
fields:
  title:
    label: Title
    type:  text
    width: 3/4
  show:
    label: &nbsp;
    type: radio
    default: hide
    options:
      true: Show
      false: Hide
    width: 1/4
  line1:
    type: line
  text:
    label: &nbsp;
    type: textarea
    placeholder: Pull text, such as a description or form instructions.
    width: 3/4
  inputs:
    label: Fields
    type:  Structure
    width: 1/4
    entry: >
      <div class="field-grid">
        <div class="field-grid-item" style="margin: 0 auto;">
          <div style="opacity:.75;pointer-events:none;">
            <label class="label"><i class="icon icon-left fa {{field_type}}" style=""></i><span style="display: inline-block;vertical-align:text-bottom;">{{field_label}}</span></label>
            <input class="input" type="text" placeholder="{{field_placeholder}}" />
          </div>
          <hr style="margin:1rem 0 4px;height:0;border-top:1px dashed #DDD;background-color:transparent;">
          <div style="margin:1rem 0 0;color:#bbb;font-size:smaller;"><strong style="color:#AAA;">Input preview</strong>, appearane will vary</div>
        </div>
      </div>
    fields:
      field_label:
        label: <div><i class="icon icon-left fa fa-check-square-o"></i><span style="vertical-align:text-bottom;">New Field:</span></div>
        placeholder: Field Label
        type: text
      field_placeholder:
        placeholder: Placeholder Text
        type: text
        width: 1/2
      field_type:
        type: select
        default: fa-check-square
        options:
          fa-check-square: Default Field
          fa-user: Name
          fa-envelope: Email Address
          fa-phone-square: Phone Number
          fa-sort-numeric-asc: Numeric
          fa-bars: Message Text
        width: 1/2