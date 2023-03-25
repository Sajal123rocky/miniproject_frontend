import React from "react";

function Table(props) {
  return (
    <div className="tablecontainer">
      
      <ul className="tablelists">
        <li className="tli">{props.transid}</li>
        <li className="tli">{props.name}</li>
        <li className="tli">{props.to}</li>
        <li className="tli">{props.amount}</li>
        <li className="tli">{props.type}</li>
        <li className="tli" style={{marginLeft:"35px"}}>{props.url}</li>
    </ul>
    </div>
  );
  
}

export default Table;
