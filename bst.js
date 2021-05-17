function getDepth(val, node, depth = 0) {
  if (val === node.val) {
    return depth;
  } else if (val < node.val) {
    return getDepth(val, node.left, depth + 1);
  } else {
    return getDepth(val, node.right, depth + 1);
  }
}

getDepth = (val, bst) => {
  if (bst.val === val) {
    return 0;
  } else {
    if (val < bst.val) {
      return 1 + getDepth(val, bst.left);
    } else {
      return 1 + getDepth(val, bst.right);
    }
  }
};


let explanation = ```

node = {
  value: number,
  left: alsoNodes || null,
  right: alsoNodes || null
}

getDepth(15, rootNode)

        10
       /  \
      5    11
     / \     \
    0   7     15

O(log(n))

    VS

getDepth(113)

      10
        \
         11
           \
            15
              \
               25
                 \
                 113

O(n)
```;
