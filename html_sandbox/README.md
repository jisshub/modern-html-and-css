## Fieldset

- Can grab a form inside it.
- allows to create a box with a legend.

```html

```

## Datalist

- list attribute is an id of the Datalist element.
- Datalist similar to select element.
- comprises of a bunch of options with value attribute.

```html
<input type="text" list="fruit-list" />
<datalist id="fruit-list">
  <option value="Mango"></option>
  <option value="Apple"></option>
  <option value="Grapes"></option>
  <option value="Chaka"></option>
</datalist>
```

here the list attribute an datalist id should be same.

## Color Picker

```html
<div>
  <input type="color" name="" id="" />
</div>
```

## Progress Bar

```html
<div>
  <progress value="50" max="100"></progress>
</div>
```

## Sub and Sup Element

Used to format maths and chemical formulas and equations

```html
<p>H<sub>2</sub>0</p>
<p>CH<sub>3</sub>0</p>
<p>X<sup>2</sup>+Y<sup>2</sup></p>
```

## Picture Element

Setting image based on screen width.

```html
<picture>
  <source srcset="./images/image-1.jpg" media="(min-width: 900px)" />
  <img src="./images/image-3.jpg" style="width: 600px;" />
</picture>
```

## template tag

The template tag is an HTML tag that allows you to create a group of HTML elements that are not rendered to the page.
First of all, using a template tag makes it very clear that the HTML inside of it is used in JavaScript in order to render dynamic content. Secondly, the template tag has very handy methods for copying the content inside of it so it can be added to the DOM repeatedly. Because of this, the best use case for the template tag is a list which can be dynamically added to.

[Template Tag](https://blog.webdevsimplified.com/2020-06/template-tag/)

```html
<body>
  <template>
    <h3>
      This is a template
      <small>Hello</small>
    </h3>
  </template>

  <script>
    const template = document.querySelector('template');
    const content = template.content.cloneNode(true);
    document.body.append(content);
  </script>
</body>
```

We select template tag using querySelector, later access the content in it and append those
into the body element.

---


