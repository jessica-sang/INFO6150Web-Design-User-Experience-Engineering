import React, { useState } from "react";
import Button from "./Button";
import ModalComponent from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button visual="link" type="button" onClick={openModal}>
        Open Modal
      </Button>
      <Button visual="button" type="button" onClick={() => alert("Button clicked!")}>
        Click me
      </Button>
      <Button visual="link" type="button" onClick={() => alert("Link clicked!")}>
        Click me
      </Button>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={() => alert("Form submitted!")}>
          <Button visual="link" type="submit">
            Submit
          </Button>
        </form>
      </ModalComponent>
    </div>
  );
}

export default App;



