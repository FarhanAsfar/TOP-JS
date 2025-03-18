function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        const info = (`${title} by ${author}, ${pages}, ${read} `);
        return info;
    }

}

Book.prototype.rating = '4.4'; //book1 will also have access to the property 'rating'.

const book1 = new Book('The Hobbit', 'J.R.R', '249', 'read');

console.log(book1.info());
console.log("Rating: ",book1.rating);

// console.log(Object.getPrototypeOf(book1));