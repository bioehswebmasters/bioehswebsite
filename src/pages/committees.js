import React from "react";
//import CommitteesDropdown from 'src/components/WebsiteFunctions';
import CommitteesDropdown from "../components/WebsiteFunctions/CommitteesDropdown";
//put candidate information as well here
//<CommitteesDropdown/>
function Committees(){
    return(
        <div>
        <h1> Welcome to committees</h1>
        <CommitteesDropdown/>
        </div>
    )
}
export default Committees;