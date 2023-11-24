import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>🙂</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😊</p>
      </StepMessage>
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {/*is==isOpen*/}
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <button
              className={step >= 1 ? "active" : ""}
              onClick={() => setStep(1)}
            >
              1
            </button>
            <button
              className={step >= 2 ? "active" : ""}
              onClick={() => setStep(2)}
            >
              2
            </button>
            <button
              className={step >= 3 ? "active" : ""}
              onClick={() => setStep(3)}
            ></button>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈🏻 Previous</span>
              {/* asta e "children",adica tot contentul dintre "> content <" */}
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>Next 👉🏻</span>
              {/* asta e "children",adica tot contentul dintre "> content <" */}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step} </h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
