import React from "react";
import MemberEntry from "./MemberEntry";
import mock_data from "./MOCK_DATA";

const MemberList = () =>{

    return(<div>
        {mock_data.map((data)=>(
            <MemberEntry name={data.Name} class={data.Class} date={data.Date} price={data.Pricing} cancel={data.Cancel} waive={data.Waive} charges={data.Charges} apply={data.Apply} type={data.Type}/>
        ))}
    </div>)

};

export default MemberList;