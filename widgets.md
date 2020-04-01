---
marp: true
theme: uncover
paginate: false
footer: _Nobody wants another pptx_
_class: invert

---



# How to create your own ServiceNow widget

---

<!-- paginate: true -->

### Smells like presentations agenda

- [How to create your own ServiceNow widget](#how-to-create-your-own-servicenow-widget)
    - [Smells like presentations agenda](#smells-like-presentations-agenda)
  - [Fantastic widgets and where to find them](#fantastic-widgets-and-where-to-find-them)
      - [Widget Editor](#widget-editor)
  - [Much to learn, you still have](#much-to-learn-you-still-have)
    - [Basics](#basics)
    - [Understanding of global objects in widget](#understanding-of-global-objects-in-widget)
    - [Bootstrap grid](#bootstrap-grid)
    - [The grid](#the-grid)
    - [Together we can ~~rule~~ create a widget](#together-we-can-srules-create-a-widget)
  - [Links to source](#links-to-source)
  - [Useful links](#useful-links)

---

<!-- _class: invert -->
## Fantastic widgets and where to find them

---

#### Widget Editor

![bg left](widget_backend_ui.png)

There are two options to get your way to the inside of a widget.
Within the backend just search for "widget" and you will find it under
Service Portal > Widgets

---

![bg left](widget_sp_config.png)

You can also find the editor with the URL:

<your_servicenow_instance>**/sp_config**

---

<!-- _class: invert -->
## Much to learn, you still have

> Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. 
> Hate leads to very miserable widgets.
>
> *Senior ServiceNow Developer Y. Oda*

---

### Basics

Prerequisite to work with widgets:
- how to query data from the server
- how to manipulate data and save it
- common understandig of AngularJS
  - bind variables to client controllers
  - access server object in a widget
  - gather user input

---

### Understanding of global objects in widget

![client_server](/widget_presentation/Server-ClientGlobalScripts.png)

---

### Bootstrap grid

![bg left](/widget_presentation/src/grid.jpg)

ServiceNow uses the [Bootstrap](https://getbootstrap.com) library to display widgets in an ordered way

---

### The grid

Column 1 | Column 2 | Column 3 | Column 4
---|---|---|---
Row 1 | Row 1 | Row 1 | Row 1 |
...|...|...|...

```html
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>

</div>
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>
```

---

![bg](/widget_presentation/src/page_designer_columns.png)

---

### Together we can ~~rule~~ create a widget

**Demo**

---

## Links to source

Widget | Link
---|---
Hello World | [GitHub](https://github.com/t3chnico/widget_fundamentals/tree/master/example_widgets/hello_world)
Update a record | [GitHub]()
Use the grid | [GitHub]()
Validation |[GitHub]()
Angular | [GitHub]()

---

## Useful links

[Widget guide](https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/build/service-portal/concept/widget-dev-guide.html)
[Bootstrap grid](https://getbootstrap.com/docs/4.0/layout/grid/)