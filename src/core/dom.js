class Dom {
  constructor(selector) {
    //#app
    this.$el =
      typeof selector === "string"
        ? document.getElementById(selector)
        : selector;
  }

  html(html) {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html("");
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }

    return this;
  }

  closest(select) {
    return $(this.$el.closest(select));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  css(style = {}) {
    Object.keys(style).forEach((key) => (this.$el.style[key] = style[key]));
  }

  get data() {
    return this.$el.dataset;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
