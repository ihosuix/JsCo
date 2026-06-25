// تفاوت اپراتور === با == و ==! با =! چیه

// اپراتور === نوع دیتا تایپ هم رو چک میکنه
console.log(2 == 2); //T
console.log(2 == "2"); //T


console.log(2 === 2); //T
console.log(2 === "2"); //F


// اپراتور ==! نوع دیتا تایپ هم رو چک میکنه
console.log(2 != 2); //F
console.log(2 != "2"); //F

console.log(2 !== 2); //F
console.log(2 !== "2"); //T
