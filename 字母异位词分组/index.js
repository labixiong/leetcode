// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

 

// 示例 1:

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 示例 2:

// 输入: strs = [""]
// 输出: [[""]]
// 示例 3:

// 输入: strs = ["a"]
// 输出: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  for (let str of strs) {
    let array = Array.from(str);//字符转成数组
    array.sort();// 排序
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : new Array();//从map中取到相应的数组
    list.push(str);//加入数组
    map.set(key, list);//重新设置该字符的数组
  }
  return Array.from(map.values());//map中的value转成数组
};
