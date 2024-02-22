import React from "react";
import CSFundamentalsSKill from "./CSFundamentalsSKill";
import SoftSkills from "./SoftSkills";
import TechnicalSkills from "./TechnicalSkills";
import Heading from "./Heading";
const Training = () => {
    return (
        <>
            <div>
               <Heading/>
                <TechnicalSkills />
                <CSFundamentalsSKill />
                <SoftSkills />
            </div>
        </>
    );
};

export default Training;