export const isAnagram = (t, s) => {
  if (s.length != t.length) return false;
  const sMap = new Map();
  const tMap = new Map();
  for (let index in s) {
    let sChar = s[index];
    let tChar = t[index];
    let sMapCount = sMap.get(sChar) ?? 0;
    let tMapCount = tMap.get(tChar) ?? 0;
    sMap.set(sChar, ++sMapCount);
    tMap.set(tChar, ++tMapCount);
  }
  for (let [char, count] of sMap) {
    if (count != tMap.get(char)) return false;
  }
  return true;
};
