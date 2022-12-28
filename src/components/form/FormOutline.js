import React, { useState } from "react";
import styled from "styled-components";
import FormSidebar from "./FormSidebar";
import FormMainView from "./FormMainView";

function FormOutline() {
  const [formStep, setFormStep] = useState(0);
  return (
    <StyledFromOutline>
      <FormSidebar formStep={formStep} />
      <FormMainView formStep={formStep} setFormStep={setFormStep} />
    </StyledFromOutline>
  );
}

const StyledFromOutline = styled.div`
  position: relative;
  width: 930px;
  height: 600px;
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  background-color: white;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(217, 100%, 97%);
  }
`;

export default FormOutline;
