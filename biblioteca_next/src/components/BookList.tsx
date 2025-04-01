interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      imageLinks?: { thumbnail?: string };
    };
  }
  
  interface BookListProps {
    books: Book[];
  }
  
  export default function BookList({ books }: BookListProps) {
    return (
      <ul className="mt-4 space-y-4">
        {books.length === 0 ? (
          <p className="text-black">No books found.</p>
        ) : (
          books.map((book) => (
            <li
              key={book.id}
              className="flex items-center gap-4 p-4 bg-[#e8fff9] rounded-lg"
            >
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="w-16 h-24 object-cover rounded-md"
                />
              )}
              <div>
                <h3 className="font-semibold text-black">{book.volumeInfo.title}</h3>
                <p className="text-sm text-black">
                  {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                </p>
              </div>
            </li>
          ))
        )}
      </ul>
    );
  }
  