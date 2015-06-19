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

##### Import Structure

Each `bit` imports its own sub-sheets. For example, imagine our directory looked like this:

```
│ box/
│ bloc/
+ bit/
  │ _*.scss
  │ _@.scss
  │ _headings.defaults.scss
  │ _headings.scss
  │ _item.scss
  └ _sizes.scss
```

From the dot-separated syntax you can see that `headings.defaults` is a sub-sheet. We can also easily infer a sub-sheet's parent, so in this example, the `_headings.scss` sheet.

This naming convention helps us keep discreet pieces of related code separate while simultaneously alowing us to maintain control over the cascade (especially important since `bits` target low-level selectors where specificity can become confusing.)