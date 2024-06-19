function createDom(root) {
  const { type, attributes, children } = root;

  if (type != null) {
    const node = document.createElement(type);

    if (attributes != null) {
      for (const [name, value] of Object.entries(attributes)) {
        node.setAttribute(name, value);
      }
    }

    if (children != null) {
      for (let child of children) {
        node.append(createDom(child));
      }
    }

    return node;
  } else {
    return (textNode = document.createTextNode(root));
  }
}

const testDom1 = createDom({
  type: 'input',
  attributes: {
    class: 'my-input',
    type: 'password',
    placeholder: 'type your parrword',
  },
});

const testDom2 = createDom({
  type: 'p',
  children: [
    'Hello',
    {
      type: 'strong',
      children: ['World'],
    },
  ],
});

console.log(testDom1);
console.log(testDom2);
