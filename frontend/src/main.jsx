import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
const MultiDropdownMenu = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleOptionChange = (option) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };
  
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  
    return (
      <div>
        <h2>Multi Dropdown Menu</h2>
        <div>
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <div>
          Selected Options: {selectedOptions.join(', ')}
        </div>
      </div>
    );
  };
  
  export default MultiDropdownMenu;
