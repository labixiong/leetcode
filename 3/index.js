/**
 * 3-无重复字符的最长字串
 */

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 提示：
// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const set = new Set()
  let j = 0, max_len = 0
  
  for(let i = 0; i < s.length; i ++) {
    if(!set.has(s[i])) {
      // 如果集合中没有则存储进去并更新最大长度
      set.add(s[i])
      max_len = Math.max(max_len, set.size)
    } else {
      // 如果有当前项的情况下，则依次删除，用j控制要删除的元素
      while(set.has(s[i])) {
        set.delete(s[j])
        j++
      }
      // 重新添加当前的
      set.add(s[i])
    }
  }

  return max_len
};