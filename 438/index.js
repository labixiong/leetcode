// 438 - 找到字符串中所有字母异位词

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
// 示例 1:
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:
// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const sLen = s.length, pLen = p.length
  
  // 边界判断
  if (sLen < pLen) return []
  // 每个字母出现的次数
  const pCount = new Array(26).fill(0)
  const sCount = new Array(26).fill(0)
  let result = []
  // 判断所存储的数量是否一致
  function isEqual(s, p) {
    return s.toString() === p.toString()
  }

  for (let i = 0; i < pLen; i++) {
    // 找到字母的索引位置进行 + 1
    sCount[s[i].charCodeAt() - 'a'.charCodeAt()] += 1
    pCount[p[i].charCodeAt() - 'a'.charCodeAt()] += 1
  }

  // 如果当前已经相等了，则说明索引是0
  if(isEqual(sCount, pCount)) {
    result.push(0)
  }

  // 构造滑动窗口
  for(let i = 0; i < sLen - pLen; i ++) {
    sCount[s[i].charCodeAt() - 'a'.charCodeAt()] -= 1
    sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] += 1

    // 如果现在相等，则索引值是i + 1
    if(isEqual(sCount, pCount)) {
      result.push(i + 1)
    }
  }

  return result
};