// import React, { useState } from "react";
import Login from "../../pages/Login/Login";

function App() {
  // const [message, setMessage] = useState(0);

  // React.useEffect(() => {
  //   fetch("http://192.168.101.10:5000/")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data));
  // }, []);

  return (
    <>
      {/* <pre>{JSON.stringify(message, null, 2)}</pre> */}
      <Login></Login>
    </>
  );
}

export default App;
