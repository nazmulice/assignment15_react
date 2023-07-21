
import { useState } from 'react';

function App() {
 
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    list.push(item);
    setItem(...item);
  }

  const removeItem = () => {
    list.splice(index, 1);
    setItem(...item);
  }

  return (
    <div>
      <table>
        <tbody>
          {
            list.length !== 0(
              
            )
          }
        </tbody>
      </table>


        <input type="text" placeholder="Enter Item" />
        <button onClick={addItem}>Add</button>
      </div>

  );
}

export default App


