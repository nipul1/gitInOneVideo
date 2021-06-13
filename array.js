let items = []
console.log(items)
items = [1, 2, 3]
console.log(items)

//printing  array length 
console.log(items.length);

//iterating the array 
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

for (let item of items) {
    console.log(item);
}