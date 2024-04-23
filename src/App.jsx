import React, { useState } from "react";
import Modal from "./Modal";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Otwórz okienko
      </button>
      {/*1.  jeśli open true to wykonuje się () */
      /* svg to przycisk zamkniencia*/
      /* Ten sposub stosuje sie bez animacji*/}
      {/* {open && (
        <div className="overlay">
          <div className="modal">
            <svg
              onClick={() => setOpen(false)}
              height="200"
              viewBox="0 0 200 200"
              width="200"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          </div>
        </div>
      )} */}
      {
        /*2. animate - robi nasz gif niwidzianym a dodanie "show" widzianym */
        //ten metod jest liepszy dla animacji
      }
      {/* <div className={`overlay animated ${open ? "show" : ""}`}>
        <div className="modal">
          <svg
            onClick={() => setOpen(false)}
            height="200"
            viewBox="0 0 200 200"
            width="200"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div> */}
      <Modal open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        {/* <h3>To jest modalne okienko</h3> */}
      </Modal>
      {/* open &&( <Modal open={open} setOpen={setOpen}) /> */}
    </div>
  );
}

export default App;
