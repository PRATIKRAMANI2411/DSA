// array delete 

let data = [12,4,34,66,78,90,56];
let position = 3;

for(let i = position; i < data.length-1; i++){
    data[i] = data[i+1];
}
    //console.log(data)
data.length = data.length-1;
console.log(data)