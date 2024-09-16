import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ({ remainingTime, targetTime, resetRemainingTime}, ref) {
  const dialogRef = useRef();
  let result = null;
  if (remainingTime > 0 && remainingTime < targetTime * 1000) {
    result = "Won";
  } else {
    result = "lost";
  }

  useImperativeHandle(ref, ()=> {
	return {
		open() {
			dialogRef.current.showModal();
		}
	}
  })

  return createPortal(
    <dialog className="result-modal" ref={dialogRef} onClose={resetRemainingTime}>
      <h2>you {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      {result == "lost" &&<p>
        you stopped timer with <strong>{(remainingTime/1000).toFixed(2)} seconds left.</strong>
      </p>}
	  {result == "Won" &&<p>
        your score {((1-remainingTime/(targetTime*1000))*100).toFixed(2)}
      </p>}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
	document.getElementById('modal')
	);
});

export default ResultModal;
