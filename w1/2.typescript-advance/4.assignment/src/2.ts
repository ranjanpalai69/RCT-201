// Create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it

interface name{
    firstname:string;
    lastname?:string
}


let obj:name={
    firstname:"Ranjan",
    lastname:"Palai"
}
const getName=(obj:name):string=>{
      if(!obj.lastname) return obj.firstname;
      return obj.firstname+" "+obj.lastname;
}

let obj1:name={
    firstname:"Ritesh"
}


getName(obj);
getName(obj1)