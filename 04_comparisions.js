// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === this is strict cheak in this they not convert 

console.log("2" === 2);

/*Note 

=> The reason is that an equality check == and comparions ><>=<= work differently comparisons convert null to a number , treating it as 0.
That why (3) null >=0 is true ans (1) null > 0 is false.

*/








/*The reason is that an equality cheak == and comparisons > <> =
<= work differently .
comparisons CONVERT null to a number , treating it as 0.
That's why (3) null >=0 is true and (1) null > 0 is false.*/