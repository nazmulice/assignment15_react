
import { useState } from 'react';

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
      <h1>Todo List</h1>
      <table>
        <tbody>
          {
            list.length !== 0 ? (
              list.map((element, index)=>{
                return (
                  <tr key={index}>
                    <td>{element}</td>
                    <td>
                      <button onClick={() => {
                        removeItem(index)
                      }}>Remove</button>
                    </td>
                  </tr>
                );
              })
          ): (<tr></tr>)
          
          }
        </tbody>
      </table>


        <input onChange={(e)=> setItem(e.target.value)} placeholder="Enter Item" />
        <button onClick={addItem}>Add</button>
      </div>

  );
}

export default App


