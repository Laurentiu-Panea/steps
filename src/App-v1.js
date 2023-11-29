import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const x = 0;

export default function App() {
  return (
    <div>
      <Steps />
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
            >
              3
            </button>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
