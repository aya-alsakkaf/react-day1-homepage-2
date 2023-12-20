import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookStoreImg } from './BookStoreImg';
import Card from './GreetingCard';
import {Books} from './product';

function App() {
  return (
    <div>
      <Card name="Scottish Bookstore" greeting="Where You Can Live a thousand lives"/>
      <BookStoreImg height="" width="100%" />
      <div className="d-flex justify-content-around mt-3">
        {Books.map((book) => 
        <div className="card border-light" style={{width: "18rem"}}>
        <img src={book.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <p className="card-text">{book.price} KWD</p>
        </div>
      </div>
        )}
      </div>
    </div>
  );
}

export default App;
