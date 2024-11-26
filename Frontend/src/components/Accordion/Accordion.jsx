import PropTypes from "prop-types";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <button className="transaction-button">
          {isOpen ? "Hide transactions" : "View transactions"}
        </button>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Accordion;
