//DataStore for this Demo
import { observable, useStrict, action } from "mobx";
useStrict(true);

class BookStore {

  @observable _books = [];
  constructor() {
    this.fetchBooks();
    //this._observer = null;
  }
  get books() {
    return this._books;
  }

  @action
  changeBooks(books){
    this._books.replace(books);
  }

  @action
  addBook(book){
    this._books.push(book); //This can go through the strict mode = window.store.addBook({ "id": 45,"title": "The Book of prog", "info": "stuff","moreInfo": "" })
  }

  /*subscribe(observer) {
    this._observer = observer;
  }*/

  getBook(id) {
    return this._books.filter((book) => {
      return book.id === Number(id);
    })[0];
  }

  fetchBooks = ()=> {
    fetch("http://localhost:7777/books")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.changeBooks(response);
        console.log("Got books from server");
      })
  }
}
//This makes it possible in the browser to create a new book.
//window.store.books.push({ "id": 45,"title": "The Book of prog", "info": "stuff","moreInfo": "" })
let store = new BookStore();
window.store = store; //Window is the global object in the browser

export default store;