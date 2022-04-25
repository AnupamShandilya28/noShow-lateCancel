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
<<<<<<< HEAD
  }>,
  onRowUpdate: (id : number)=> void;
=======
  }>;
  onRowUpdate: (id: number) => void;
>>>>>>> fb7c7f964f90711faa5df25c3517fb05ba0706dc
}> = (props) => {
  return (
    <tr {...props.row.getRowProps()}>
      {props.row.cells.map((cell) => {
<<<<<<< HEAD
        return <EntryCell cell={cell} 
        updateRow={props.onRowUpdate}
        />;
=======
        return <EntryCell updateRow={props.onRowUpdate} cell={cell} />;
>>>>>>> fb7c7f964f90711faa5df25c3517fb05ba0706dc
      })}
    </tr>
  );
};

export default EntryRow;
