let Arr=[];
function array(){
    let S=+prompt("Մուտքագրիր մասսիվի չափը");
    for(let i=0;i<S;i++){
        Arr[i]=prompt("Մուտքագրիր մասսիվի անդամները");
    }

}

// 1.        Max Of Array
array();
let max = Arr[0];
    for( i=0;i<Arr.length;i++){
        if(Arr[i]>max){
            max=Arr[i];
        }
    }
console.log("max="+max);

// 2.        Min Of Array

let min = Arr[0];
for( i=0;i<Arr.length;i++){
    if(Arr[i]<min){
        min=Arr[i];
    }
}
console.log("min="+min);

// 3.        Remove Duplicates From Array

for( i =0; i<Arr.length;i++){
    for( j=i+1;j<=Arr.length;j++){
        if(Arr[i]==Arr[j]){
            let c = Arr[i];
            let z =Arr.indexOf(c);
            Arr.splice(z,1);
        }
    }
}
console.log(Arr);

// 4.   Sum of Array
let P=0;
for( i=0; i<Arr.length; i++){
    P+=+Arr[i];
}
console.log("Sum="+P);

// 5. Adding new array
// let Arr2=[];
//    let S2=+prompt("Մուտքագրիր նոր մասսիվի չափը");
//    for(let i=0;i<S2;i++){
//        Arr2[i]=prompt("Մուտքագրիր նոր մասսիվի անդամները");
//    }
//
// let Arr3=Arr.unshift(Arr2);
// console.log(Arr3);
