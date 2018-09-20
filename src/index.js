class Sorter { 
  constructor() {  
  this.length = 0; 
  this.compareFunction = null; 
  this.array = []; 
  } 
  
  add(element) { 
  this.array.push(element); 
  this.length+=1; 
  } 
  
  at(index) { 
  return this.array[index]; 
  } 
  get length() { 
  return this._length; 
  } 
  
  set length(value) { 
  this._length = value; 
  } 
  
  toArray() { 
  return this.array; 
  } 
  sort(indices) { 
  var array2 = []; 
  for(var i = 0; i<indices.length;i++){ 
  array2.push(this.array[indices[i]]); 
  } 
  indices = indices.sort((a,b)=>a-b); 
  if(this.compareFunction === null){ 
  array2 = array2.sort((a,b)=>a-b); 
  }else{ 
  array2 = array2.sort(this.compareFunction); 
  } 
  for(var i=0;i<array2.length;i++){ 
  this.array[indices[i]] = array2[i]; 
  } 
  } 
  // we initial our compare function 
  setComparator(compareFunction) { 
  this.compareFunction = compareFunction; 
  } 
  }

module.exports = Sorter;