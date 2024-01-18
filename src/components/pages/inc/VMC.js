import pp from "../../pictures/pp.jpg";
import React from "react";

function VMC() {
  return (
    <div
      className="accordion"
      style={{ marginTop: "200px" }}
      id="accordionaPanelsStayOpenExample"
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
            style={{ color: "#156570", fontSize: "30px" }}
          >
            An international, independent medical humanitarian organisation
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
             We provide
            medical assistance to people affected by conflict, epidemics,
            disasters, or exclusion from healthcare. Our teams are made up of
            tens of thousands of health professionals, logistic and
            administrative staff - most of them hired locally. Our actions are
            guided by medical ethics and the principles of impartiality,
            independence and neutrality.
          </div>
          <div>
            <img src={pp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VMC;
