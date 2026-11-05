import * as bookModel from '../models/bookModels.js';
import ValidationError from '../utils/ValidationError.js';

export const fetchAllBooks = async () =>{
    const books = await bookModel.fetch();
    return books;
}

const doesBookExist = async (book) =>{
    let existing;
    if (Object.hasOwn(book,"id")){
        existing = await bookModel.findBookById(book.id);      
    }else{
        existing = await bookModel.findBookByNameAndAuthor(book);
    }
    if(existing.length > 0){
        return true;
    }

    return false;       
}

export const createBook = async(book) =>{
    const existing = await doesBookExist(book);

    if(existing){
        throw new ValidationError(404, 'Book already exists!');
    }

    const bookId = await bookModel.insert(book);
    return bookId;
} 

export const updateBook = async(book) =>{
    const updatedBook= await bookModel.update(book);
    if(!existing){
        throw new ValidationError(404,'Book does not exist!');
    }
    return updatedBook;
}

export const deleteBook = async(id) =>{
    const deletedBook= await bookModel.remove(id);
    if(!deletedBook){
        throw new ValidationError(404,'Book does not exist!');
    }
    return deletedBook;
}

