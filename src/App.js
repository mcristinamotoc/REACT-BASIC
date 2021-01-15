import Book from "./book";
import Books from "./books.json";
export default () => {
  return (
    <div>

      {/* <h1>Viatge a la lluna</h1> */}
      {/* <Book /> */}


      {Books.map((item, index) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.author}</p>
          </div>
        );
      })}

      
    </div>
  );
};
