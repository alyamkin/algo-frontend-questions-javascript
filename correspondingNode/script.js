// First solution
// function correspondingNode(tree1, tree2, node1) {
//   const nodeList1 = treeTraverse(tree1);
//   const nodeList2 = treeTraverse(tree2);

//   const node1Index = nodeList1.findIndex((node) => node === node1);

//   function treeTraverse(tree) {
//     const nodes = [];
//     const children = tree.children;

//     nodes.push(tree);

//     Array.from(children).forEach((child) => {
//       nodes.push(...treeTraverse(child));
//     });

//     return nodes;
//   }

//   return nodeList2[node1Index];
// }

// Second solution
// function correspondingNode(tree1, tree2, node1) {
//   const stack1 = [tree1];
//   const stack2 = [tree2];

//   while (stack1.length > 0) {
//     let curr1 = stack1.pop();
//     let curr2 = stack2.pop();

//     if (curr1 === node1) {
//       return curr2;
//     }

//     stack1.push(...curr1.children);
//     stack2.push(...curr2.children);
//   }
// }

// Third solution
function correspondingNode(tree1, tree2, node1) {
  const path = [];

  let currNode = node1;

  while (currNode !== tree1) {
    const parent = currNode.parentNode;
    const currIndex = Array.from(parent.children).indexOf(currNode);
    path.push(currIndex);
    currNode = parent;
  }

  // return path.reduceRight((currNode, currIndex) => {
  //   return currNode.children[currIndex];
  // }, tree2);
  let target = tree2;
  path.reverse().forEach((childIndex) => {
    target = target.children[childIndex];
  });

  return target;
}

const dom1 = document.createElement('div');
dom1.innerHTML = `
  <main>
    <h1>Heading</h1>
    <div>
      <h2>test1</h2>
      <p>test2 <em>emphasysy</em></p>
    </div>
  </main>
`;

const dom2 = document.createElement('main');
dom2.innerHTML = `
  <article>
    <h1>Heading2</h1>
    <section>
      <img src="img.png" alt="image">
      <h3>test5 <strong>strong</strong></h3>
    </section>
  </article>
`;

// console.log(correspondingNode(dom1, dom2, dom1));
// console.log(correspondingNode(dom1, dom2, dom1.querySelector('h2')));
console.log(correspondingNode(dom1, dom2, dom1.querySelector('em')));
