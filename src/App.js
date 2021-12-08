import { useState } from "react";
import Remove from "./assets/images/bx-x-circle.svg";
import "./styles.css";

const App = () => {
  const [values, setValues] = useState([]);
  const [options, setOptions] = useState([
    "Whitney Reid",
    "Hiroko Potter",
    "Basia Higgins",
    "Lana Hurley",
    "Jesse Hayden",
    "Keely Moon",
    "Dolan Curtis",
    "Ayanna Hunter",
    "Hop Peterson",
    "McKenzie Osborne",
    "Martin Holman",
    "Fay Yates",
    "Drake Rush",
    "Paloma Trevino",
    "Tara Alvarado",
    "Hakeem Faulkner",
    "Garrett White",
    "Nehru Shaw",
    "Dieter Arnold",
    "Catherine Cotton",
    "Cadman Sharpe",
    "Stephen Trujillo",
    "Coby Dodson",
    "Guy Raymond",
    "Hunter Wiley",
    "Adara Wolfe",
    "Quintessa Smith",
    "Tanek Lowe",
    "Alma Dyer",
    "Ross Lynn",
    "Marsden Reed",
    "Aristotle Witt",
    "Cody Baird",
    "Emery Drake",
    "Dennis Petersen",
    "Ulric Mcconnell",
    "Christine Woodward",
    "Serena Lowe",
    "Caesar Strickland",
    "Cara Hamilton",
    "Chava Bray",
    "Elvis Forbes",
    "Briar Case",
    "Gretchen Wade",
    "Leroy Morrison",
    "Adria Haynes",
    "Lesley Crosby",
    "Chiquita Valenzuela",
    "Clinton Hobbs",
    "Macaulay Abbott",
    "Noelani Campos",
    "Savannah Cameron",
    "Isaiah Sanders",
    "Cody Livingston",
    "Mary Terrell",
    "Abigail Velez",
    "Baker Hewitt",
    "Vernon Shields",
    "Janna Andrews",
    "Keane Bauer",
    "Mason Foreman",
    "Lydia Zamora",
    "Harrison Dunlap",
    "Sandra Mason",
    "Dolan Green",
    "Jordan Lynch",
    "Yvonne Johns",
    "Anthony Clarke",
    "Palmer Boyd",
    "Herrod Cantu",
    "Arthur Newman",
    "Samson Reid",
    "Brittany Nguyen",
    "Jenette Franco",
    "Donovan Decker",
    "Wing Calderon",
    "Libby Rich",
    "Martha Mendez",
    "Nicole Jenkins",
    "Kane Pacheco",
    "Ciara Lindsey",
    "Uriel Rosales",
    "Alice Christensen",
    "Avram Quinn",
    "Rigel Rhodes",
    "Hiram Vaughan",
    "Teagan Alston",
    "Alvin Johns",
    "Galena Dillard",
    "Raphael Adams",
    "Heidi Blankenship",
    "Ria Mcclure",
    "Evangeline Hunter",
    "Brenda Lopez",
    "Jillian Kane",
    "Macon Tanner",
    "Gage Mcdonald",
    "Ivory Hudson",
    "Nayda Sanchez",
    "Deacon Henry"
  ]);
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
