// array merge

let data1 = [12,34,56,78,90,23];
let data2 = [34,56,78,34,8,90,12];

let merge_data = [];

for(let i = 0; i < data1.length; i++){
    merge_data[i] = data1[i];
}
for(let i = 0; i < data2.length; i++){
    merge_data[data1.length + i] = data2[i];
}
console.log(merge_data)

// let array_merge = [...data1, ...data2]
// console.log(array_merge)