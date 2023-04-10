const str1 = document.getElementById('str1')
const str2 = document.getElementById('str2')
const btn = document.getElementById('btn')


function isIsomorphic(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let map = new Map();
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (map.has(str1[i])) {
      if (map.get(str2[i]) != t[i]) {
        return false;
      }
    }
    else {
      if (set.has(t[i])) {
        return false;
      }
      map.set(s[i], t[i]);
      set.add(t[i]);
    }
  }
  return true;
}
btn.addEventListener('click', isIsomorphic)

  
   