// Create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional
let array = [];
const PhoneBook = (arg) => {
    array.push(arg);
};
let person1 = {
    phones: [9178878130, 8144630220],
    addresses: ["bbsr", "khordha"],
    firstname: "Ranjan",
    lastname: "palai",
    Prefix: "Sri",
    middlename: "kumar"
};
let person2 = {
    phones: [9178878130, 8144630220],
    addresses: ["bbsr", "khordha"],
    firstname: "Rahul",
    lastname: "Steph",
    email: "rahul@gmail.com"
};
PhoneBook(person1);
PhoneBook(person2);
console.log(array);
