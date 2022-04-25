import React from "react";
import { Row } from "react-table";
import EntryCell from "./EntryCell";

const EntryRow: React.FC<{
  row: Row<{
    Name: string;
    Class: string;
    Date: string;
    Pricing: string;
    Cancel: number;
    Waive: number;
    Charges: number;
    Apply: boolean;
    Type: string;
  }>,
  onRowUpdate: (id : number)=> void;
}> = (props) => {
  return (
    <tr {...props.row.getRowProps()}>
      {props.row.cells.map((cell) => {
        return <EntryCell cell={cell} 
        updateRow={props.onRowUpdate}
        />;
      })}
    </tr>
  );
};

export default EntryRow;
