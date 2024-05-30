// array :- search element in array 

let data = [10,23,66,45,90,32,78,90,40];
let search  = 32;
let index = undefined;

for(let i = 0; i <= data.length; i++){
    if(data[i] == search){
        index = data[i];
    }
}
console.log(index)
console.log(data.indexOf(search))

// removing element
console.log(data.splice(2,1)) // removing 66 and returns [ 66 ]
console.log(data) // [ 10, 23, 45, 90, 32, 78, 90, 40]