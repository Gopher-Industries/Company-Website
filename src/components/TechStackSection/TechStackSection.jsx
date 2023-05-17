import React from "react";

import * as s from "./TechStackSection.style";
import LogoDocker from "@Assets/images/service-logo/docker.png";
import LogoGCP from "@Assets/images/service-logo/gcp.png";
import LogoHTML5 from "@Assets/images/service-logo/html5.png";
import LogoJS from "@Assets/images/service-logo/js.png";
import LogoReact from "@Assets/images/service-logo/react.png";
import LogoDotnet from "@Assets/images/service-logo/netcore.png";

const TechStackSection = () => {
    return (
        <s.HomeLogoContainer className="TechStackSection">
            <img className="TechStackImage" src={LogoDocker} alt={"Docker Logo"} />
            <img className="TechStackImage"  src={LogoGCP} alt={"GCP Logo"} />
            <img className="TechStackImage"  src={LogoHTML5} alt={"HTML5 Logo"} />
            <img className="TechStackImage" src={LogoJS} alt={"JS Logo"} />
            <img className="TechStackImage" src={LogoReact} alt={"React Logo"} />
            <img className="TechStackImage" src={LogoDotnet} alt={"Dot Net Logo"} />
        </s.HomeLogoContainer>
    );
};

export default TechStackSection;
