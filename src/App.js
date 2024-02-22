// import { useState } from "react";

import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, SetisOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }
//   function handleNext() {
//     if (step < 3) setStep((s) => s + 1);
//   }

//   return (
//     <>
//       <button className="close" onClick={() => SetisOpen((is) => !is)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>
//           <StepMessage step={step}>{messages[step - 1]}</StepMessage>
//           <div className="buttons">
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
//               <span>👈</span> Previous
//             </Button>
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
//               {" "}
//               Next <span>👉</span>
//             </Button>
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// function Button({ bgColor, textColor, onClick, text, children }) {
//   return (
//     <button
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// function StepMessage({ step, children }) {
//   return (
//     <div className="message">
//       <h3>Step {step}:</h3>
//       {children}
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text" // done
        collapseButtonText="Collapse text" // done
        buttonColor="#ff6622" // done
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,

  className = "",
  collapsedNumWords = 10,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const DisplayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    color: buttonColor,
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
  };
  return (
    <div className={className}>
      <span>{DisplayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}{" "}
      </button>
    </div>
  );
}
