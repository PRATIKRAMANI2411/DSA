// array insert element

let data = [12,45,78,45,90];
let newEl = 70;
let position = 2;
// console.log(data)
for(let i = data.length-1; i >= 0; i--){
    if(i >= position){
        data[i+1] = data[i];
        if(i == position){
            data[i] = newEl
        }
    }
}
console.log(data)


// using JS functions
let item = [12,45,78,45,90];
item.splice(2,0,8989)
console.log(item)
