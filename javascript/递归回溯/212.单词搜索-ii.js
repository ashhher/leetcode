/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const row_num = board.length,
        col_num = board[0].length;

    /* -------------- DFS ------------ */
    // let res = [],
    //     grid = [],
    //     flag;

    // for (let i = 0; i < words.length; i++) {
    //     flag = false;
    //     for (let p = 0; p < board.length; p++) {
    //         for (let q = 0; q < board[0].length; q++) {
    //             if (board[p][q] === words[i].slice(0, 1)) {
    //                 grid = JSON.parse(JSON.stringify(board));
    //                 if (dfs(p, q, words[i], grid)) {
    //                     res.push(words[i]);
    //                     flag = true;
    //                     break;
    //                 }
    //             }
    //         }
    //         if (flag) break;
    //     }
    // }

    // return res;

    // function dfs(row, col, str, grid) {
    //     if (!grid[row][col]) return false;

    //     if (grid[row][col] === str) return true;

    //     let cur_char = grid[row][col];
    //     grid[row][col] = null;

    //     if (cur_char === str.slice(0, 1)) {
    //         str = str.slice(1, str.length);
    //         // up
    //         if (row - 1 > -1 && dfs(row - 1, col, str, grid)) return true;
    //         //down
    //         if (row + 1 < row_num && dfs(row + 1, col, str, grid)) return true;
    //         //left
    //         if (col - 1 > -1 && dfs(row, col - 1, str, grid)) return true;
    //         // right
    //         if (col + 1 < col_num && dfs(row, col + 1, str, grid)) return true;
    //     }

    //     grid[row][col] = cur_char;
    //     return false;
    // }

    /* ============ DFS + 字典树 ========== */
    const res = [];
    const [h, w] = [board.length, board[0].length];

    // 【1】构建字典树
    const getTrie = words => {
        const root = Object.create(null);
        for (const word of words) {
            let node = root;
            for (const c of word) {
                // 若该层没有该字母 则创建一对应子节点
                if (!node[c]) node[c] = Object.create(null);
                // 移到下一层
                node = node[c];
            }
            // 使用单词标记单词结尾
            node.isEnd = word;
        }
        return root;
    };

    // 【3】DFS 深度优先搜素
    const dfs = (trie, i, j) => {
        // 【3.1】判断是否遍历到结尾
        if (trie.isEnd) {
            // 将结尾单词放入res
            res.push(trie.isEnd);
            // 防止前缀与单词相同的情况 eg. 'abc', 'abcd'
            trie.isEnd = null;
        }

        // 【3.2】边界条件
        if (i < 0 || j < 0 || i >= h || j >= w) return;

        // 【3.3】该字母不在字典树当前层中，返回
        if (!trie[board[i][j]]) return;

        // 【3.4】该字母在字典树当前层中
        const temp = board[i][j];
        // 标记已访问，以免再次遇到
        board[i][j] = '#';
        dfs(trie[temp], i, j - 1);
        dfs(trie[temp], i, j + 1);
        dfs(trie[temp], i - 1, j);
        dfs(trie[temp], i + 1, j);
        // 四个方向访问完毕，恢复字符（即回溯）
        board[i][j] = temp;
    };

    /***************************************/
    const trie = getTrie(words);

    // 【2】遍历网格
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            dfs(trie, i, j);
        }
    }
    return res;
};
// @lc code=end

// let board = [
//         ["o", "a", "a", "n"],
//         ["e", "t", "a", "e"],
//         ["i", "h", "k", "r"],
//         ["i", "f", "l", "v"]
//     ],
//     words = ["oath", "pea", "eat", "rain"];
// console.log(findWords(board, words));