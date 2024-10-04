import { React, useState } from 'react'


const Tugas8 = () => {
  const [count, setCount] = useState(0);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  };

  const enableButton = () => { //improvisasi button disable
    handleCount();
    if (count + 1 >= 10) {
      setButtonDisabled(true);
    }
  };

  const resetCount = () => { //improvisasi nambahin reset count agar tidak perlu refresh page
    setCount(0);
    setButtonDisabled(false);
  };

  return (
    <div>
      <header className="App">
        <div>
          <p className="paragraph">{count}</p>
        </div>
        <button onClick={enableButton} disabled={isButtonDisabled} style={{ border : "1px solid gray", borderRadius : "5px" }}>
          Tambah
        </button>
        {count >= 10 ? (
          <>
            {" "}
            <p className="paragraph" style={{ color: "red", fontSize: "20px" }}>
              {" "}
              State count sudah lebih dari 10!!!{" "}
            </p>{" "}
            <p
              className="paragraph"
              style={{
                textDecorationLine: "underline",
                color: "blue",
                cursor: "pointer",
              }}
              onClick={() => resetCount()}
            >
              Reset Count
            </p>{" "}
          </>
        ) : null}
      </header>
    </div>
  );
}

export default Tugas8
