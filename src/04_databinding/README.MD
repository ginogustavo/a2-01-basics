# Databinding

Communication between your TS code (business logic ) and your HTML(template).

## output from TS to HTML

1. String Interpolation ({{data}})
2. Property Binding ( [property]="data")

---

## React to (User) events. (from template to business logic)

3. Event Binding ( (event) = "expression" )

---

4. Combination of both: Two-Way-Binding ( [(ngModel)] = "data")

# 1. String Interpolation:

Using **{{  }}** for TS expression, e.g. reference a property
Anything like method(which return string), variables, but not multiline expression. like if or for control

# 2. Property Binding:

Enclose an html property with [] e.g.

```HTML
<button [disabled]="!allowNewServer"></button>
```

Dynamically binds this native property. The expression **""** is resolved to a boolean for this property.
For other properties, another types might be required. e.g. directives or components.

**Whe to use**: Use String Interpolation, to output a value in the html.
Use Property Binding, if want to change some property of html element, directive or components.

**Note:** Don't mix "Property binding" and "String interpolation"

# 3. Event Binding

You use **()** for events by specifying the event name. You could any expression, like boolean
property to true, you could do inline the template, but calling function is often most common. e.g. (click).

```html
<button (click)="onCreateServer()"></button>
```

You can bind to all the events available by HTML attribute you are placing this on. e.g. onMouseEnter event: **(mouseEnter)=""**

# $event

The "click" and "input" events provide some data like e.g. coordinates where it
was clicked. We can capture this data with $event passed as argument to the method
we are calling.
If you want to output what the user enters in the input(the value):

```html
<input type="text" (input)="onUpdateServerName($event)" />
```

**$event** - is a reserved variable name, you can use it in the
template when using event binding.

### Pre - 2Way-Binding

Enable **ngModel** direcive -> In app.module.ts add:
FormsModule to imports[]
import {FormsModule} from '@angular/forms'

# 3. Two-Way Binding

We use "directives", e.g. **"ngModel"**

```html
<input type="text" class="form-control" [(ngModel)]="serverName" />
```

In one way this will:

- Trigger on the input event
- Update the value of the server in our component

On the other way, It'll also update the value of the input element if we change **"serverName"** somewhere else.
