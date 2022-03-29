Alternative of creating manually a component, we can use the CLI.
e.g. we want the 'server' component in another component, nested in 'servers' component.

```sh
$ng generate component servers
$ng g component servers
$ng g c servers

#to skip test file (spec) creation
$ng g c serers --skipTests true
$ng g c shopping-list/shpping-list-edit --skipTests true
```

# Template (in component.ts)

In the @Component decorator, one have to be specified, either
templateUrl (link to external template) or template (to define it in this file)

```Typescript
template: '<app-server></app-server>'
```

General rule, if you have more than 3 lines better a separate file
You could omit 'selector' and dont need 'styles' but you have to set template.

# style

Same for stylesUrl, where you specify an array of styles, or user the inline style and **``** (baltics)
to write your css. you have to decide which one you want to use.

# Selector

They must be unique, so to not overwrite an existing one
Like css, you are not limited to select by element. You can put this into square brackets
to use the "attribute" selector.

```Typescript
@Component({
selector: '[app-servers]',
```

```html
<div app-servers></div>
```
