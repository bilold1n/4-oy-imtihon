// 1
// function removeFirstOccurrences(str, value) {
//   let index = str.indexOf(value);
//   if (index == -1) {
//     return str;
//   }
//   console.log(str.slice(index + value.length));
//   console.log(str.slice(0, index));
//   return str.slice(0, index) + str.slice(index + value.length);
// }
// console.log(removeFirstOccurrences("sabalombasalo05m", "ba"));
// 2
// function unbracketTag(str) {
//   return str.slice(1, -1);
// }
// console.log(unbracketTag("<div>"));
// console.log(unbracketTag("<span>"));
// console.log(unbracketTag("<a>"));
//3
// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(17));
// console.log(isPrime(5));
// console.log(isPrime(4));
//4
//5
// function getSumBetweenNumbers(n1, n2) {
//   let hisob = 0;
//   for (let i = n1; i <= n2; i++) {
//     hisob += i;
//   }
//   return hisob;
// }
// console.log(getSumBetweenNumbers(1, 2));
// console.log(getSumBetweenNumbers(5, 10));
// console.log(getSumBetweenNumbers(-1, 1));
//6
function getElementsOneTime(arr) {
  let uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (arr.indexOf(element, i + 1) === -1 && arr.indexOf(element) === i) {
      uniqueElements.push(element);
    }
  }
  return uniqueElements;
}
let arr = [1, 5, 6, 1, 5, 7, 2];
console.log(getElementsOneTime(arr));
//7
// function removeDuplicate(arr) {
//   let ushlab = [];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let qiymat = arr[i];
//     if (!ushlab[qiymat]) {
//       ushlab[qiymat] = true;
//       result.push(qiymat);
//     }
//   }
//   return result;
// }
// let arr = [1, 1, 2, 2, 3, 3, 5, 5];
// console.log(removeDuplicate(arr));
//8
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 2;
// let m = 5;
// function removeElementsByIndexes(arr, k, m) {
//   if (k <= 0 || m >= arr.length || k >= m) {
//     return "noto'gri";
//   }
//   arr.splice(k, m - k + 1);
//   return arr;
// }
// console.log(removeElementsByIndexes(arr, k, m));
//9
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// books.forEach((book, index) => {
//   if (book.alreadyRead) {
//     console.log(`${book.author}ning "${book.title}" kitobi o'qilgan;`);
//   } else {
//     console.log(`${book.author}ning "${book.title}" kitobi o'qilmagan;`);
//   }
// });
//10
// function calculateTotalCost(products) {
//   let totalCost = 0;
//   for (let i = 0; i < products.length; i++) {
//     let mahsulot = products[i];
//     let miqdor = mahsulot.quantity;
//     let narx = mahsulot.price;
//     let chegirma = mahsulot.chegirma || 0;
//     let subtotal = miqdor * (narx - chegirma);
//     totalCost += subtotal;
//   }
//   return "umumiy summa: " + totalCost;
// }
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// console.log(calculateTotalCost(products));
//
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
