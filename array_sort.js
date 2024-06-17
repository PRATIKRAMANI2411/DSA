// array sort

let data = [10, 20, 15, 2, 23, 90, 67];

for(let i = 0; i <= data.length; i++){
    for(let j = 0; j <= data.length; j++){
        if(data[j] > data[j+1]){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
}
console.log(data) // [2, 10, 15, 20, 23, 67, 90]
console.log(data.sort((a,b) => a)) // [2, 10, 15, 20, 23, 67, 90]