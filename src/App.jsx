import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/CSS/main.css"
function App() {
 
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    list.push(item);
    setList([...list]);
  }

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <div>
      <h1 className="display-3 text-center text-primary">Todo List</h1> <hr />
      <section className="inputBtn">
        <input
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter list Item"
        />
        <button onClick={addItem}>Add ITEM</button>
      </section>
      <section>
        <table className="tabItem">
          <tbody>
            {list.length !== 0 ? (
              list.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element}</td>
                    <td>
                      <button
                        onClick={() => {
                          removeItem(index);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App


