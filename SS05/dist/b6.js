"use strict";
//@ts-ignore
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `${this.title} - ${this.author}`;
    }
}
//@ts-ignore
class Library {
    constructor() {
        this.books = [];
    }
    addbook(book) {
        this.books.push(book);
    }
    viewBook() {
        console.log("Danh sach trong thu vien");
        this.books.forEach((book, index) => {
            console.log(`${index + 1} - ${book.getInfo()}`);
        });
    }
}
const book1 = new Book("One piece", "Oda");
const Library1 = new Library();
Library1.addbook(book1);
Library1.viewBook();
