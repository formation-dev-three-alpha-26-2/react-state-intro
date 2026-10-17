
import FishTableRow from "./FishTableRow";
const FishTable = (props) => (
  <table>
    <tbody>
      {props.manar.map((el) => {
        console.log(props , "props");
        
        return (
 <FishTableRow el={el} />
        )

      })}
    </tbody>
  </table>
);

export default FishTable;








