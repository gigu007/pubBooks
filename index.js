
// function bubbleSort(arr){
//     var noSwap;
//     for(i=arr.length;i>0;i--){
//         noSwap=true;
//         for(j=0;j<i-1;j++){
//             console.log(arr,arr[j],arr[j+1]);
//             if(arr[j]>arr[j+1]){
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//                 noSwap=false;
//             }
//         }
//         if(noSwap)break;
//         console.log('we are done');
//     }
//     return arr;
// }
// console.log(bubbleSort([23,30,12,34,29,31,27]));

function takeShower(){
    return 'showering';
}
function eatBreakfast(){
    let meal=cookFood();
    return `eating ${meal}`;
}
function cookfood(){
    let items=['rice','beans','eba','soup'];
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp(){
    takeShower()
    eatBreakfast()
    console.log('ready for work');
}

function countDown(num){
    if(num<=0){
        console.log('all done');
        return;
    }
    console.log(num);
    num--;
    
    countDown(num);
}
countDown(10);
function sumRange(num){
    if(num===1)return 1;
    
    return num + sumRange(num-1);
    
}
console.log(sumRange(6));
function factorial(num){
    let total=1;
    for(i=num;i>0;i--){
        total *=i;
    }
    return total;
}
console.log(factorial(6));
function reFactorial(num){
    if(num==1){
        return 1;
    }
    return num * reFactorial(num-1);
}
console.log(reFactorial(6));