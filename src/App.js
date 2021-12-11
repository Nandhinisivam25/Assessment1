import { useState } from "react";
import Remove from "./assets/images/bx-x-circle.svg";
import "./styles.css";
const App = () => {
  const [values, setValues] = useState([]);
  const [options, setOptions] = useState([]);
  var url = "https://61b23971c8d4640017aaf2cb.mockapi.io/Ass/users";
  fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        var data_received = result[0]['members'];
        setOptions(data_received);
      }
    )
    const [selectedOption, setSelectedOption] = useState(null);
    const change = (event) => {
    const value = event.target.value;
    if (values.includes(value) === false) {
      setValues([...values, value]);
      setSelectedOption(null);
    }
  };
  const searchHandler = (event) => {
    const allOptions = [...options];
    allOptions.map((el) => {
      if (
        el.replace(/ /g, "").toLowerCase() ===
        event.target.value.replace(/ /g, "").toLowerCase()
      ) {
        console.log(el.toLowerCase(), event.target.value.toLowerCase());
        setSelectedOption(event.target.value); //java
      } else if (event.target.value === "") {
        setSelectedOption(null); //java
      }
    });
  };
  const removeHandler = (item) => {
    const filteredValues = values.filter((value) => value !== item);
    setValues(filteredValues);
  };
  return (
    <div className="app">
      <div className="form">
        <div className="result">
          <div className="result-values">
            {values.map((item) => (
              <p>
                {item}{" "}
                <img
                  src={Remove}
                  alt="Remove"
                  onClick={() => removeHandler(item)}
                />{" "}
              </p>
            ))}
          </div>
          <input type="text" onChange={searchHandler} />
        </div>
        <div className="options">
          {selectedOption !== null ? (
            <select onClick={change} multiple="multiple">
              <option
                value={selectedOption}
                disabled={values.includes(selectedOption)}
              >
                {selectedOption}
              </option>
            </select>
          ) : (
            <select onChange={change} multiple="multiple">
              {options.map((item) => {
                return (
                  <option value={item} disabled={values.includes(item)}>
                    {item}
                  </option>
                );
              })}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
