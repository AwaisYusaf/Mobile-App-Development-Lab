//Problem-1

// let num=23678;
// let k = 4;
// while(k>1){
//     k-=1;
//     num = parseInt(num/10);
//     console.log(num);
// }
// console.log("Result:",num%10);

//Problem-2

// let num = 23617;
// let sum = 0;
// while(num>0){
//     sum += num%10;
//     num = parseInt(num/10);
// }
// console.log(sum);

//Problem-3

// let num = 23617;
// let sum = 0;
// while(num>0){
//     sum += ((num%10)%2==0?num%10:0);
//     num = parseInt(num/10);
// }
// console.log(sum);

//Problem-4

// let start = 0;
// while(start<=10){
//     console.log("-----------")
//     console.log("Square of ",start,start**2);
//     console.log("Cube of ",start,start**3);
//     start+=1;
// }

//Problem-5

// function checkVowel(ch){
//     let isVowel = false;
//     let vowels=['a','e','i','o','u'];
//     for(let i of vowels){
//         if(ch===i){
//             isVowel = true;
//             break;
//         }
//     }
//     return isVowel;
// }
// function intelligent(data){
//     if(isNaN(data)){
//         for(let i=0;i<data.length;i++){
//             if(checkVowel(data[i].toLowerCase())){
//                 return i;
//             }
//         }
//     }
//     else{
//         let str = data.toString();
//         let revStr="";
//         for(let i=str.length-1;i>=0;i--){
//             revStr+=str[i];
//         }
//         return revStr;
//     }
// }
//console.log(intelligent("dddda"));

//Problem-6

// let found=false;
// let userInput=2;
// while(!found){
//     let random = parseInt(Math.random()*10);
//     console.log(random);
//     if(+userInput===random){
//         console.log("You WIN");
//     }
//     found=true;
// }


//Problem-7


// let arr = [2,45,1,5,9,10];
// if(arr[0]===10){
//     console.log("10 is at start");
// }
// else if(arr[arr.length-1]===10){
//     console.log("10 is at end");
// }
// else{
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]===10){
//             console.log("10 is at",i);
//         }
//     }
// }

//Problem-8

// function getPosition(ch){
//     let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     if(isNaN(ch)){
//         for(let i=0;i<alphabets.length;i++){
//             if(ch===alphabets[i]){
//                 return i+1;
//             }
//         }
//     }
//     else{
//         return alphabets[ch-1];
//     }
    
// }
// function convertStr(data){
//     let target = [];
//     for(let x of data){
//         target.push(getPosition(x));
//     }
//     target.sort((a,b)=>a-b);
//     let newStr="";
//     for(let i of target){
//         newStr+= getPosition(i);
//     }
//     console.log(newStr);
// }
// let data = "comsats";
// convertStr(data)






