// Feet To Inch conversion function
feetToInch = (fValue) => {
    let inch = fValue * 12;
    return inch;
}

let feetValue = 10;
let inchValue = feetToInch(feetValue);
console.log(inchValue);