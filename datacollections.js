var string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let n = string.length;
var string = string.replace(/\n/g, ",")
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let ss = string.split(",")
let ns = ss.length
for (i=0;i<ns+1;i++) {
    if (i == 0 || i == 1 || i == 2 || i == 3 ) {
        cell1 += ss[i] + " "
    }
    else if (i == 4 || i == 5 || i == 6 || i == 7 ) {
        cell2 += ss[i] + " "
    }
    else if (i == 8 || i == 9 || i == 10 || i == 11 ) {
        cell3 += ss[i] + " "
    }
    else if (i == 12 || i == 13 || i == 14 || i == 15 ) {
        cell4 += ss[i] + " "
    }
    else if (i == 16 || i == 17 || i == 18 || i == 19 ) {
        cell4 += ss[i] + " "
    }
    else if (i == 20 || i == 21 || i == 22 || i == 23) {
        console.log("")
    }
    else {
        console.log(cell1);
        console.log(cell2);
        console.log(cell3);
        console.log(cell4);
    } 
}
console.log(cell1);
console.log(cell2);
console.log(cell3);
console.log(cell4);