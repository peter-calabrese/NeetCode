/**
 * @param {number[]} nums
 * @return {boolean}
 */
export function hasDuplicate(nums) {
  const mySet = new Set(nums);
  return mySet.size != nums.length;
}
