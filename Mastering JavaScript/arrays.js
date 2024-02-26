/*
arr = [1, 2, 3];
console.log(typeof arr);

arr1 = new Array();

console.log(typeof arr1);
console.log(arr1);
*/

/*
arr = [1, 2, 3, 4, 9, 8, 7, 19, 21, 29, 20];
console.log(arr[0]);
console.log(arr[7]);
console.log(arr[21]);

console.log(arr[-1]);//In arrays , there are no negetive indexes

//Arrays are mutable, we can modify the arrays
arr[1]=200;
console.log(arr);
*/

/*
arr=[5, 7, 1, 9, 8, 16];
arr.push(11);
console.log(arr);

arr.push(99, 100, 101);
console.log(arr);

//unshift method
arr.unshift(999);//Insert at begining
console.log(arr);

arr.unshift(9, 99);
console.log(arr);
*/

/*
//pop method
let arr=[5, 7, 1, 9, 8, 16];

console.log(arr.pop());
console.log(arr);

//shift
console.log(arr.shift());
console.log(arr);

//concat
let a1=[1, 2, 3];
let a2=[5, 6];

let r=a1.concat(a2);
console.log(r);

//size of the array
console.log(a1.length);

//Convert array into strings
chr_arr=['R', 'u', 'p', 'a', 'y', 'a', 'n', ' ', 'D', 'i', 'r', 'g', 'h', 'a', 'n', 'g', 'i'];

//join
console.log(chr_arr.join());
console.log(chr_arr.join(""));
console.log(chr_arr.join("$"));

console.log(chr_arr.toString());

//Slicing of the array
let num=[3, 4, 5, 5, 6, 7, 9, 11, 13, 12, 10];
//       0  1  2  3  4  5  6  7   8   9   10
console.log(num.slice(2));
console.log(num.slice(2, 7));
console.log(num.slice(5, -1));
console.log(num.slice(-9, -2));
console.log(num.slice(2, -1));

//Splicing, which modifies the given array
let numbers=[1, 2, 3, 4, 5];
let removed=numbers.splice(2, 2, 11, 12, 13);//removed elements are stored in removed
console.log(numbers);
console.log(removed);
*/

//Reverse a given array
/*
let nums = [5, 4, 3, 2, 1];
nums.reverse();
console.log(nums);
*/

/*
let nums=[4, 1, 5, 7, 19, 2];
console.log(nums.indexOf(19));
console.log(nums.indexOf(21));
*/

//sorting the array

let my_arr=[5, 4, 1, 3, 2];
my_arr.sort();
console.log(my_arr);

let my_arr1=[15, 40, 1, 13, 2];
// my_arr1.sort((a, b)=>a-b);
my_arr1.sort((a, b)=>b-a);
console.log(my_arr1);