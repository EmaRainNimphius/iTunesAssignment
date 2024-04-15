function Book(title, pages){
    this.title = title;
    this.pages = pages;
}
Book.type = "Book";
Book.detailsComponent = "BookDetails";


class Movie {
    static type = "Movie";
    static detailsComponent = "MovieDetails";

    title;
    runtime;
    constructor(title, runtime) {
        this.title = title;
        this.runtime = runtime;
    }
}

export {Book, Movie};
// named exports, imported with 'import {Book} ...'