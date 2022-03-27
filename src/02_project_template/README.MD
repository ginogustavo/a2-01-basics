ng serve -> will inject those JS files in the index.html

# How the app start starts up

1. index.html
2. main.ts (inserted by angular cli in the index.thml)
3. app/app.module.ts
4. app/app.component.ts

# Component

It's simple a Typescript class, so Angular will be able to instantiate it. (create object of it)

Angular uses 'components' to build web pages, and 'modules' to bundle different
pieces e.g components of the app into packages. For now we'll only use app module

# Module

Bundler that gives Angular information which features my app has and use.
Start as an empty Typescript class, transformed by a Decorator (@NgModule)

# @NgModule

- bootstrap: tells Angular which component to be aware of a the app startup(to be recognized in the index.html). i.e. AppComponent.
  We usually don't add more components to the index.html.

- declaration: register new components. e.g. part of this app is the ServerComponent. The new components have be registered in the module, so to Angular knows this component exist,because by default, Angular won't scan all your files, you have to specified (created files is not enough)
- imports: allows us to add some other modules, to this Module. We could split up your app into
  multiple modules and then import these modules, and outsource some stuff into our module.
  e.g. BrowserModule: base functionality we need to start our app.
- providers: (we'll check it in services sections)
