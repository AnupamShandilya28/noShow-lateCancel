
import EntryCell from "./EntryCell";


const EntryRow = (props) => {
  return (
    <tr {...props.row.getRowProps()}>
      {props.row.cells.map((cell) => {
        
        return(<EntryCell cell={cell} />);

       
      })}
    </tr>
  );
};

export default EntryRow;
