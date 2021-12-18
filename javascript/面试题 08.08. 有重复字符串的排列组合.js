/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
    /* -------------- O(!n) - DFS回溯 ------------ */
    // let res = [];
    // for (let i = 0; i < S.length; i++) {
    //     dfs(S[i], delete_str(S, i));
    // }

    // // 因为未处理相同字符情况 所以需要对结果去重
    // res = Array.from(new Set(res));

    // return res.sort();

    // function dfs(str, left) {
    //     // 无剩余字符 将结果添加到结果集
    //     if (left.length === 0) {
    //         res.push(str);
    //         return;
    //     }

    //     // 依次对剩余字符进行排列组合添加
    //     for (let i = 0; i < left.length; i++) {
    //         dfs(str + left[i], delete_str(left, i));
    //     }
    // }

    // // 删除字符串上指定位置字符
    // function delete_str(str, index) {
    //     return str.slice(0, index) + str.slice(index + 1, str.length);
    // }

    /* ============ O(!n) - DFS回溯+剪枝 ========== */
    // 与上面方法的区别
    // 1. 先对字符串内进行排序 目的是使相同字符相邻
    // 2. 函数内添加剪枝步骤 通过判断相邻字符是否相等实现
    // 3. 去掉最后的去重
    let res = [];
    S = Array.from(S).sort().join("");

    for (let i = 0; i < S.length; i++) {
        if (i > 0 && S[i] === S[i - 1]) continue;
        dfs(S[i], delete_str(S, i));
    }
    return res;

    function dfs(str, left) {
        if (left.length === 0) {
            res.push(str);
            return;
        }
        for (let i = 0; i < left.length; i++) {
            if (i > 0 && left[i] === left[i - 1]) continue;
            dfs(str + left[i], delete_str(left, i));
        }
    }

    function delete_str(str, index) {
        return str.slice(0, index) + str.slice(index + 1, str.length);
    }
};

S = "LDirNn"
console.log(permutation(S));