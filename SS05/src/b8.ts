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
    public getTitle(): string {
        return this.title;
    }
}
//@ts-ignore
class Mylibrary {
    private books: Book[] = []
    public addbook(book: Book): void {
        this.books.push(book)
    }
    public viewBook(): void {
        console.log("Danh sach trong thu vien");
        this.books.forEach((book, index) => {
            console.log(`${index + 1} - ${book.getInfo()}`);
        });
    }
    public updateBookId(id: number, newTitle: string, newAuthor: string) {
        //@ts-ignore
        const book = this.books.find(b => b.getId() === id)
        if (book) {
            //@ts-ignore
            book.setInfo(newTitle, newAuthor);
        } else {
            console.log(`Khong tim thay sach co id ${id}`);
        }
    }
    public findBookName(title: string) {
        //@ts-ignore
        const book = this.books.filter(b => b.getTitle().toLocaleLowerCase().includes(title.toLocaleLowerCase()));
        if (book.length > 0) {
            book.forEach(b => console.log(b.getInfo()))
        } else {
            console.log(`Khong tim thay ten sach ${title}`);

        }
    }
}
//@ts-ignore
const book3 = new Book(1, "One piece", "Oda");
const Library3 = new Mylibrary();
//@ts-ignore
Library3.addbook(book3)
//@ts-ignore
Library3.findBookName("One piece");



