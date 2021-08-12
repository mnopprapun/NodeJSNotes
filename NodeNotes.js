class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  // start at the index and itterate through the end and through this loop i want replace the item before with the next item. shifting the items to the left by 1.
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    // this deletes the last item from the shift since the shift does not actually delete the item only moves its to the left
    delete this.data[this.length - 1]
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.delete(0);
newArray.push('are')
console.log(newArray);


//'ierdnA si eman yM iH'
// this reverse function takes a string and splits it into an array and then we reverse that array and rejoin the array back into a string.
// spread operator (...) could be used inplace of the split() 
function reverse(){
  const a = 'ierdnA si eman yM iH'
  const result = a.split('').reverse().join('');

  console.log(result)
}
reverse()


function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm thats not good.'
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0 ; i--)
backwards.push(str[i]);
return backwards.join('')
}


function mergeSortedArrays()

mergeSortedArrays([0, 3, 4, 31], [4, ,6, 30]);

