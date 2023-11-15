import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age,setage]=useState('');
  const [storedItems, setStoredItems] = useState([]);
  

  useEffect(() => {
    // Retrieve items from LocalStorage on component mount
    const storedData = localStorage.getItem('storedItems');
    if (storedData) {
      setStoredItems(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Save items to LocalStorage whenever storedItems changes
    localStorage.setItem('storedItems', JSON.stringify(storedItems));
  }, [storedItems]);

  const hand=(i)=>{
    setage(i.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const addToLocalStorage = () => {
    if (name.trim() !== '' && description.trim() !== '') {
      const newItem = { name, description,age };
      setStoredItems([...storedItems, newItem]);
      setName('');
      setDescription('');
      setage('');
    }
  };

  const clearLocalStorage = () => {
    // Clear all items from LocalStorage and reset the state
    localStorage.removeItem('storedItems');
    setStoredItems([]);
  };

  return (
    <div>
     

    <div className="aa">
     <div className="lo">
      <h1>Local Storage </h1>
     
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"/><br/>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"/><br/>

          <input type="text" value={age} placeholder="age" onChange={hand}></input><br></br>

        <button onClick={addToLocalStorage}>Add to LocalStorage</button>
        <button onClick={clearLocalStorage}>Clear LocalStorage</button><br/>
     </div>
     



      <div className='ll'>
        <h2>Stored Items:</h2>
        <ul className='cc'>
          {storedItems.map((item, index) => (
            <li key={index}>
              <strong>Name:</strong> {item.name}<br />
              <strong>Description:</strong> {item.description}<br/>
              <strong>age:</strong> {item.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
    

   
   
   
    </div>
  );
}

export default App;