// 二叉树节点
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 通过一个层次遍历的数组生成一棵二叉树
function getTreeFromArray(array) {
    let n = array.length;
    if (!n) return null;
    let index = 0;
    let root = new TreeNode(array[index++]);
    let queue = [root];
    while (index < n) {
        let top = queue.shift();
        let v = array[index++];
        top.left = v == null ? null : new TreeNode(v);
        if (index < n) {
            let v = array[index++];
            top.right = v == null ? null : new TreeNode(v);
        }
        if (top.left) queue.push(top.left);
        if (top.right) queue.push(top.right);
    }
    return root;
}

// 层序遍历一棵二叉树 生成一个数组
function getArrayFromTree(root) {
    let res = [];
    let que = [root];
    while (que.length) {
        let len = que.length;
        for (let i = 0; i < len; i++) {
            let cur = que.shift();
            if (cur) {
                res.push(cur.val);
                que.push(cur.left, cur.right);
            } else {
                res.push(null);
            }
        }
    }
    while (res.length > 1 && res[res.length - 1] == null) res.pop(); // 删掉结尾的 null
    return res;
}

// 先序遍历
function preorder(root, arr) {
    if (root == null) return arr;
    arr.push(root.val);
    preorder(root.left, arr);
    preorder(root.right, arr);
    return arr;
}

// 中序遍历
// 中序遍历二叉搜索树等于遍历有序数组！！！！！！
function inorder(root, arr) {
    if (root == null) return arr;
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
    return arr;
}

// 后序遍历
function postorder(root, arr) {
    if (root == null) return arr;
    postorder(root.left, arr);
    postorder(root.right, arr);
    arr.push(root.val);
    return arr;
}

let root = getTreeFromArray([5, 2, 7, 1, 3, null, 8]);
console.log(preorder(root, []));