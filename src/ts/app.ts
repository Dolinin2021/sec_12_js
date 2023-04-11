import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика', '137 мин.', 2000));

console.log(cart.items);
console.log(cart.sum());
console.log(cart.discountPrice(10));

cart.delete(10001);
console.log(cart.items);