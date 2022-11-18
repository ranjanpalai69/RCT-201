// Create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

// Create a function PhoneBook
// it should accept PersonDetails type argument
// create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
// Push the PersonDetails object in the array, from the function.

interface PersonDetails{
    
    phones:number[];
    addresses:string[];
    firstname:string;
    lastname:string;
    Prefix?:string;
    email?:string;
    middlename?:string

}

let array:PersonDetails[]=[];


const PhoneBook=(arg:PersonDetails):void=>{
    array.push(arg);
}


let person1:PersonDetails={
     phones:[9178878130,8144630220],
     addresses:["bbsr","khordha"],
     firstname:"Ranjan",
     lastname:"palai",
     Prefix:"Sri",
     middlename:"kumar"
}

let person2:PersonDetails={
    phones:[9178878130,8144630220],
    addresses:["bbsr","khordha"],
    firstname:"Rahul",
    lastname:"Steph",
   email:"rahul@gmail.com"
}

PhoneBook(person1);
PhoneBook(person2);


console.log(array);