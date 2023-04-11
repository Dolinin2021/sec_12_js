import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('correct operation of the Movie class constructor', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика', '137 мин.', 2000));
  expect(cart.items).toEqual(
    [
      {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225
      },
      {
        id: 1008,
        name: 'Meteora',
        author: 'Linkin Park',
        price: 900
      },
      {
        id: 1,
        name: 'Мстители',
        year: 2012,
        country: 'США',
        tagline: 'Avengers Assemble!',
        genre: 'фантастика',
        time: '137 мин.',
        price: 2000
      }
    ]
  );
});

test('correct operation of the sum method of the Cart class', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика', '137 мин.', 2000));
  expect(cart.sum()).toBe(4900);
});

test('correct operation of the discountPrice method of the Cart class', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика', '137 мин.', 2000));
  expect(cart.discountPrice(10)).toBe(4410);
});

test('correct operation of the delete method of the Cart class', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика', '137 мин.', 2000));
  cart.delete(1)
  expect(cart.items).toEqual(
    [
      {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225
      },
      {
        id: 1008,
        name: 'Meteora',
        author: 'Linkin Park',
        price: 900
      }
    ]
  );
});

test('removing a non-existent element', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика', '137 мин.', 2000));
  cart.delete(10000)
  expect(cart.items).toEqual(
    [
      {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225
      },
      {
        id: 1008,
        name: 'Meteora',
        author: 'Linkin Park',
        price: 900
      },
      {
        id: 1,
        name: 'Мстители',
        year: 2012,
        country: 'США',
        tagline: 'Avengers Assemble!',
        genre: 'фантастика',
        time: '137 мин.',
        price: 2000
      }
    ]
  );
});