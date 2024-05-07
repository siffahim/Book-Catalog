import { addBook } from '@/redux/features/Books/BookSlice';
import { useGetAllBooksQuery } from '@/redux/features/Books/Booksapi';
import { useAppDispatch } from '@/redux/hooks';
import { IBook } from '@/types/BooksType';
import { Link } from 'react-router-dom';
export default function Home() {
  const dispatch = useAppDispatch();
  const { data: result, error, isLoading } = useGetAllBooksQuery(undefined);
  const handleSingleBook = (book: IBook) => {
    dispatch(addBook(book));
  };
  console.log(isLoading);

  console.log(result);
  let sortedData: IBook[] = [];
  if (result?.data) {
    sortedData = [...result.data].sort((a, b) => {
      const dateA = new Date(a.PublicationDate);
      const dateB = new Date(b.PublicationDate);
      return dateB.getTime() - dateA.getTime();
    });
  }
  if (isLoading) {
    <>
      <span className="loading loading-bars text-white loading-lg"></span>
      <p>loading</p>
    </>;
  }
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {sortedData?.map((book: IBook) => (
        <div className=" p-5 rounded-lg cardShadow">
          <figure className="border p-2 rounded-md">
            <img src="https://l8.nu/rMS1" alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{book?.Title}</h2>
            <p>
              Books have the power to transport us to new worlds, ignite our
              imaginations, and inspire us to reach for greatness.
            </p>
            <p>Genre: {book?.Genre}</p>
            <p>Author: {book?.Author}</p>
            <p>Published: {book?.PublicationDate}</p>
            <div className="card-actions justify-end">
              <Link to={`/product-details/${book._id}`}>
                <button
                  onClick={() => handleSingleBook(book)}
                  className="btn btn-primary border-0"
                >
                  view details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
