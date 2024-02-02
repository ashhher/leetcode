/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let l = 1;

    const totalLength = s.length;

    while (l <= totalLength / 2) {
        if (totalLength % l !== 0) {
            l++;
            continue;
        }

        let st = s;
        const initStr = st.substring(0, l);
        st = st.substring(l);

        for (let i = 1; i < totalLength / l; i++) {
            if (st.substring(0, l) !== initStr) break;
            else if (i === totalLength / l - 1) return true;

            st = st.substring(l);
        }
        l++;
    }

    return false;

    // Check if it contains itself
    // let s1 = (s + s).slice(1, -1);
    // return s1.indexOf(s) != -1;

};
// @lc code=end

console.log(repeatedSubstringPattern("aabaaba"))