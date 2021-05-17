function getDepth(node, val) {
  if (val === node.val) {
    return depth;
  } else if (val < node.val) {
    return getDepth(val, node.left, depth + 1);
  } else {
    return getDepth(val, node.right, depth + 1);
  }
}

let explanation = ```

getDepth(15)

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
