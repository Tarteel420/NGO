import React from "react";
import UseOpenController from "./UseOpenController";
import './FAQ.css';

export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = UseOpenController(false);
  console.log(section);
  return (
    <div className="accordion-container">
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
      <div className="underline"></div>
    </div>
  );
};

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className="column-container4" onClick={toggle}>
      <div className="column-text">{question}</div>
      <button className="expendable-buttons">
        <span
          class="material-symbols-outlined"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
        >
          Expand more
        </span>
      </button>
    </div>
  );
};

export const TextSection = ({ text }) => {
  return (
    <div className="text-container">
      <div>{text}</div>
    </div>
  );
};