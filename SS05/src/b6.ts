//@ts-ignore
class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    public getInfo(): string {
        return `${this.title} - ${this.author}`
    }
}
//@ts-ignore
class Library {
    private books: Book[] = []
    public addbook(book: Book): void {
        this.books.push(book)
    }
    public viewBook(): void {
        console.log("Danh sach trong thu vien");
        this.books.forEach((book, index) => {
            console.log(`${index + 1} - ${book.getInfo()}`);

        })
    }
}
const book1 = new Book("One piece", "Oda");
const Library1 = new Library();
Library1.addbook(book1);
Library1.viewBook();
