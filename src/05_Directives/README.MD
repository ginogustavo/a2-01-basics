# Directives

Instructions in the DOM.

E.g. Components, once place our "selector" we are instructing angular
to add the content of our component template and the Biz Logic in TS code,
in the the place where we use the selector. -> this is the instruction.
"Components" are "Directives" with a template.

Example of Directives without template:

```html
<p appTurnGreen>Successful process!</p>
```

They can use any selector type, but typically is "attribute" selector

```Javascript
Directive Decorator:
@Directive({
  selector:'[appTurnGreen]'
})

export class TurnGreenDirective{
}
```
