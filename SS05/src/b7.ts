//@ts-ignore
class Book {
    private id: number;
    private title: string;
    private author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    public getId(): number {
        return this.id
    }
    public getInfo(): string {
        return `${this.title} - ${this.author}`
    }
    public setInfo(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}
//@ts-ignore
class Mylibrary {
    private books: Book[] = []
    public addBook(book: Book): void {
        this.books.push(book)
    }
    public viewBook(): void {
        console.log("Danh sach trong thu vien");
        this.books.forEach((book, index) => {
            console.log(`${index + 1} - ${book.getInfo()}`);
        });
    }
    public updateBookid(id: number, newTitle: string, newAuthor: string): void {
        //@ts-ignore
        const book = this.books.find(b => b.getId() === id)
        if (book) {
            //@ts-ignore
            book.setInfo(newTitle, newAuthor);
        } else {
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
