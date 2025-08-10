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
}
//@ts-ignore
class Mylibrary {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBook() {
        console.log("Danh sach trong thu vien");
        this.books.forEach((book, index) => {
            console.log(`${index + 1} - ${book.getInfo()}`);
        });
    }
    updateBookid(id, newTitle, newAuthor) {
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
}
//@ts-ignore
const book2 = new Book(1, "One piece", "Oda");
const Library2 = new Mylibrary();
//@ts-ignore
Library2.addBook(book2);
Library2.viewBook();
// sau khi update
//@ts-ignore
Library2.updateBookid(1, "One Piece - New Era", "Eiichiro Oda");
Library2.viewBook();
