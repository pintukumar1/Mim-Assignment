import React, { useState } from "react";
import Verify from "./components/Verify";
import Heading from "./components/Heading";

function App() {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <div>
      <Heading />
      <Verify toggleModal={toggleModal} modal={modal} />
      <button className="verify" onClick={toggleModal}>
        Verify Phone Number
      </button>
    </div>
  );
}

export default App;
