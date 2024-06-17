// NUMBER
//- INTEGER
//- FLOAT
const num = 5;
const num2 = 9;

const sum = num + num2;
const product = num * num2;
const quotient = num2/ num;
const sqr = num ** 2; // num * num
const pwr3 = num **3; // num * num * num
const root2 = num2 **(1/2);

console.log(".....RESULTS.....");
console.log({
    sum,
    product,
    quotient,
    sqr,
    pwr3,
    root2,
}) 

// ARRAY ( an ITTERABLE)

const arr = [2, "kit", 9, [5, "ten", [78]]];
const shoppingListmen = ["boxers", "shoes", "belts", "data"];
const shoppingListLadies = ["bags", "ear rings", "perfume"];

// How do we accesss items in ARRAY?
console.log("..... Accessing Array......");
console.log(shoppingListLadies[0]);
console.log(shoppingListmen[2]);

const perf = shoppingListLadies[3];
console.log(perf)

// lenght of Array
console.log(shoppingListLadies.length);
console.log(shoppingListmen.length)


// SET
// set is a kind "array" with unique items
const unique_items = new Set ([4, 4, 6, 8, 2, 2, 2, 2]);
console.log([unique_items]);
console.log({unique_items});
// set is sometimes used for deduping


// DICTIONARY (OBJECT)
// KEY-VALUE PAIRS
// WE CREATE dictionaries using a curly brace


console.log("DICTIONARY")
const contact_details = {
    firstName: "Kitan",
    lastName:  "Ola",
    email: "kkk@",
    phoneNo: "+229-98881222",
    address: "c/333 Jericho, Cotonou",
    country: "Benin",
}


console.log(contact_details.email); // contact_details["email"]
console.log(contact_details["phoneNo"]); // contact_details.phoneNo