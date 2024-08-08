var string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let n = string.length;
var string = string.replace(/\n/g, ",")
let cell1 = [];
let cell2 = [];
let cell3 = [];
let cell4 = [];
let cell5 = [];
let ss = string.split(",")
let ns = ss.length
for (i=0;i<ns+1;i++) {
    if (i == 0 || i == 1 || i == 2 || i == 3 ) {
        cell1.push(ss[i])
    }
    else if (i == 4 || i == 5 || i == 6 || i == 7 ) {
        cell2.push(ss[i])
    }
    else if (i == 8 || i == 9 || i == 10 || i == 11 ) {
        cell3.push(ss[i])
    }
    else if (i == 12 || i == 13 || i == 14 || i == 15 ) {
        cell4.push(ss[i])
    }
    else if (i == 16 || i == 17 || i == 18 || i == 19 ) {
        cell5.push(ss[i])
    }
    else if (i == 20 || i == 21 || i == 22 || i == 23) {
        console.log("")
    }
    else {
        console.log(cell1);
        console.log(cell2);
        console.log(cell3);
        console.log(cell4);
        console.log(cell5);
    } 
}
//console.log(cell1);
//console.log(cell2);
//console.log(cell3);
//console.log(cell4);
//console.log(cell5);

let hash1 = {}
let hash2 = {}
let hash3 = {}
let hash4 = {}
for (i=0;i<cell1.length; i++) {
        hash1[cell1[i]] = cell2[i]
        hash2[cell1[i]] = cell3[i]
        hash3[cell1[i]] = cell4[i]
        hash4[cell1[i]] = cell5[i]
}

let ht = [hash1, hash2, hash3, hash4]
//console.log(ht)

ht.pop()
ht.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
ht.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(ht)

//For part 5 we will have to extract keys from hashes and then 
//loop through the hashes to put the values back into csv format.
let rha = []
var array = []
array = Object.keys(ht[0])
rha.push(array)
for (i=0; i<ht.length; i++) {
        var array = []
        array = Object.values(ht[i])
        rha.push(array)
}
let rhs = ""
for (i=0;i<rha.length;i++) {
    
}
console.log(rha)

