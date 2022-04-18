import Tablecell from "./Tablecell";
import { ClassAttributes, HTMLAttributes, useState } from "react";
import React from "react";
const Tablerow:React.FC<{ row: { getRowProps: () => JSX.IntrinsicAttributes & ClassAttributes<HTMLTableRowElement> & HTMLAttributes<HTMLTableRowElement>; cells: any[]; }; }> =(props )=>{    
    const [checkedlatecancel,setcheckedlatecancel]=useState(false);
    const [checkednoshow,setcheckednoshow]=useState(false);  
    const [inputvalueLC,setinputvalueLC]=useState("");
    const [inputvalueNS,setinputvalueNS]=useState("");      
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
                inputvalueLC={inputvalueLC}
                setinputvalueLC={setinputvalueLC}
                inputvalueNS={inputvalueNS}
                setinputvalueNS={setinputvalueNS}
              />
            );
          })}          
        </tr>
      )
}
export default Tablerow;