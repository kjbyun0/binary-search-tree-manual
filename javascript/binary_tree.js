class Node {
  constructor(value=null, left=null, right=null) {
    // add your Node class code
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// one way to build a BST using a binary search technique.
function buildBST(sortedList) {
  if (sortedList.length === 0)
    return null;

  const mid = Math.ceil((sortedList.length - 1) / 2);
  return new Node(
    sortedList[mid], 
    buildBST(sortedList.slice(0, mid)),
    buildBST(sortedList.slice(mid+1))
  );
}

//traverse BST in left child node, parent node and right child node order
function traverseBST(root) {
  if (root === null)
    return;

  traverseBST(root.left);
  console.log(root.value);
  traverseBST(root.right);
}

// list = [1, 4, 7]
function oneToSeven() {
  // manually create the BST
  // then return the root node
  return buildBST([1, 4, 7]);
}

// list = [10, 40, 45, 46, 50]
function tenToFifty() {
  return buildBST([10, 40, 45, 46, 50]);
}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
function negativeToPositive() {
  return buildBST([-20, -19, -17, -15, 0, 1, 2, 10]);
}

if (require.main === module) {
  // add your own tests in here if you want
  const left = new Node(4);
  const right = new Node(10);
  const root = new Node(7, left, right);
  console.log("root: ", root);

  console.log("oeeToSeven: ",);
  traverseBST(oneToSeven());

  console.log("tenToFifty: ",);
  traverseBST(tenToFifty());

  console.log("negativeToPositive: ",);
  traverseBST(negativeToPositive());
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive
};

// Please add your pseudocode to this file
// And a written explanation of your solution
