import React, { useState } from "react";
import Select, { selectOption } from "../Select/Select";
import Button from "../Button/Button";

const options: selectOption[] = [
  { label: "claro", value: "light" },
  { label: "oscuro", value: "dark" },
  { label: "verde", value: "green" },
];

function App() {
  const [message, setMessage] = useState(0);

  React.useEffect(() => {
    fetch("http://192.168.101.10:5000/")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <>
      <h1>Hola Mundo</h1>
      <pre>{JSON.stringify(message, null, 2)}</pre>
      <Select options={options}></Select>
      <Button></Button>
    </>
  );
}

export default App;
