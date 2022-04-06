import Tablecell from "./Tablecell";
import { useState } from "react";
const Tablerow =(props)=>{
    console.log(props.row);
    const [checkedlatecancel,setcheckedlatecancel]=useState(false);
    const [checkednoshow,setcheckednoshow]=useState(false);        
    return (
        <tr {...props.row.getRowProps()}>              
          {props.row.cells.map(cell => {
            return (
              <Tablecell
                key={cell.row.id + cell.column.id}
                cell={cell}
                checkednoshow={checkednoshow}
                setcheckednoshow={setcheckednoshow}
                checkedlatecancel={checkedlatecancel}
                setcheckedlatecancel={setcheckedlatecancel}
              />
            );
          })}          
        </tr>
      )
}
export default Tablerow;