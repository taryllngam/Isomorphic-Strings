const str1 = document.getElementById('str1')
const str2 = document.getElementById('str2')
const btn = document.getElementById('btn')


const isIsomorphic = (str1,str2) => {
  if(str1.length !== str2.length){
    return false;
  };
  for(let i = 0; i < str1.length; i++){
    index1 = str1.indexof(str1[i]);
    index2 = str2.indexof(str2[i]);
    if(str1(index2) != str1[i]){
      str2(index1) != str2[i]
        return false
    }
  }return true
}
btn.addEventListener('click', isIsomorphic)

  
   