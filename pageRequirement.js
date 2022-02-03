pageRequirements = (b1, b2, b3) => {
    let bookPage1 = 100;
    let bookPage2 = 200;
    let bookPage3 = 300;

    let pageForBook1 = bookPage1 * b1;
    let pageForBook2 = bookPage2 * b2;
    let pageForBook3 = bookPage3 * b3;

    return [pageForBook1, pageForBook2, pageForBook3];
}

let bookQuantity1 = 10;
let bookQuantity2 = 20;
let bookQuantity3 = 30;

let books = pageRequirements(bookQuantity1, bookQuantity2, bookQuantity3);
console.log(books);