function HashTable(size) {
  this.buckets = Array(size);
  this.numbuckets = this.buckets.length;
}

HashTable.prototype.hash = function(key) {
  var total = key;
  var bucket = total % 10;
  return key;
};

HashTable.prototype.get = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key)
        return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

const SubArrayCommonDiff = (a, X) => {
  let sum = 0;
  let size = a.length;
  MyHT = new HashTable(size);
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
    if (sum = X)   return {sum, i};
    if (MyHT.get(sum)) return MyHT.get(sum);
  }
}

SubArrayCommonDiff([1, -2], -1);
