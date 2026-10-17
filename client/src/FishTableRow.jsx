import { useState } from "react";

const FishTableRow = (props) => {
  const [hide, sethide] = useState(false);

  // lutilis yckliki aala lnom



  return (
    <tr>
      <td
        className="fish-name"
        style={{ cursor: "pointer" }}
        onClick={() => {
          sethide(!hide);

          console.log(hide);
        }}
      >
        {" "}
        {props.el.name}{" "}
      </td>
      <td>
        <img src={props.el.image} alt="Nemo" />
      </td>
      {hide ? null : (
        <td className="fish-description"> {props.el.description}</td>
      )}
    </tr>
  );
};

export default FishTableRow;





