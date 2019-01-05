function sumItems(array) {
  // Sum all the numbers in the array
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])){
      ans += sumItems(array[i])
    }
    else {
      ans+= array[i];
    }
  }
  return ans;
}


module.exports = sumItems;