import React from "react";

const PriceCard = (props) => {
  return (
    <div className="card">
    {/* Creating a table for each cards to display the details */}
      <table className="table text-dark table-borderless p-5">
        <thead className="text-center border-bottom">
          <tr>
            <td colSpan="2" className="card-type">{props.details.type}</td>
          </tr>
          <tr>
            <td colSpan="2" className="card-price">{props.details.price}</td>
          </tr>
        </thead>
        <tbody>
          {/* Creating a seperate row for each feature of the card type */}
          {Object.keys(props.details.advantages).map((key, index) => {
            return (
                <tr key={index}>
                  <td className="icon">
                    {props.details.advantages[key] ? (
                      <i className="fas fa-check fw-bold"></i>
                    ) : (
                      <i className="fas fa-times text-muted"></i>
                    )}
                  </td>
                  <td className={props.details.advantages[key] ? "fw-bold" : "text-muted"}>{key}</td>
                </tr>
            );
          })}
          <tr>
            <td colSpan="2">
              <button className="btn btn-primary w-100">SIGN UP</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceCard;
