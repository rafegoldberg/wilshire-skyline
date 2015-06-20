Blocs, Boxes, & Bits
===

## Bits

A `bit` can be loosely defined as the smallest piece within a UI, and defines certain useful convention for authoring and architecting these smaller elements.

## Guidelines

#### Authoring

##### Best-Practices

A well written ruleset for these elements will

1. Be ancestor-agnostic
2. Rely on _shallow, non-nested selectors_
4. Be easy to read and refactor
5. Target single elements
  
   <small>or **define *_and_* target discreet groups of elements**. These groups *must* follow consistent structures and naming convention as set out in the `bit` sheet.</small>

#### Structure

Here's a quick overview of what a suggested `bit` structure:

```scss
//file::bit/_base.scss
.#{$base} {        //1
	@extend %bit;  //2
	& {}           //3
	&--child {}    //4
}
@import "base.subsheet";
```

Let's break it down by line:

> 1. This can also use a silent <small>`%bit_`</small> class if you plan on adding other, alternate subsheet layouts later.
> 2. Includes all base rules from <small>`%bit`</small>
> 3. Bit-specific properties. If you prefer to use a silent selector it's strongly recommended that you wrap all base classes in an <small>`&Base`</small> wrap. This will simplify your <small>`@extend`</small> systems later
> 4. Naming convention for bit's children elements.

###### Subsheets

As we can see in the above example, our <small>`bit`</small> is <small>`@importing`</small> an alternate layout defined by a subsheet. These will usually cohere to some version of this structure:

```scss
//file::bit/_base.subsheet.scss
.#{$base}__layout{      //1
	@extend .#{$base};  //2
}
```

> 1. Naming convention for alternate layouts, etc.
> 2. Alternates should extend the bit base. Similarly alternate's children should extend base children as appropriate.

##### Import Structure

Each `bit` imports its own sub-sheets. For example, imagine our directory looked like this:

```html
scss/
│ ..
│ box/
│ bloc/
+ bit/
  │ ..
  │ _*.scss
  │ _@.scss
  │ _headings.defaults.scss
  │ _headings.scss
  │ _item.scss
  └ _sizes.scss
```

From the dot-separated syntax you can see that <small>`headings.defaults`</small> is a sub-sheet. We can also easily infer a sub-sheet's parent, so in this example, the <small>`_headings.scss`</small> sheet.

This naming convention helps us keep discreet pieces of related code separate while simultaneously alowing us to maintain control over the cascade (especially important since <small>`bits`</small> target low-level selectors where specificity can become confusing.)