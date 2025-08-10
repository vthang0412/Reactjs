"use strict";
//@ts-ignore
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `${this.title} - ${this.author}`;
    }
    setInfo(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
}
//@ts-ignore
class Mylibrary {
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
    updateBookId(id, newTitle, newAuthor) {
        //@ts-ignore
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            //@ts-ignore
            book.setInfo(newTitle, newAuthor);
        }
        else {
            console.log(`Khong tim thay sach co id ${id}`);
        }
    }
    findBookName(title) {
        //@ts-ignore
        const book = this.books.filter(b => b.getTitle().toLocaleLowerCase().includes(title.toLocaleLowerCase()));
        if (book.length > 0) {
            book.forEach(b => console.log(b.getInfo()));
        }
        else {
            console.log(`Khong tim thay ten sach ${title}`);
        }
    }
}
//@ts-ignore
const book3 = new Book(1, "One piece", "Oda");
const Library3 = new Mylibrary();
//@ts-ignore
Library3.addbook(book3);
//@ts-ignore
Library3.findBookName("One piece");
