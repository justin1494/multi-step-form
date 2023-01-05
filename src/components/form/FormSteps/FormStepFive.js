import React from "react";
import styled from "styled-components";
import { ReactComponent as IconThankYou } from "../../../assets/images/icon-thank-you.svg";

function FormStepFive() {
	return (
		<StyledFormStepFive>
			<IconThankYou className="icon" />
			<h1>Thank you!</h1>
			<div className="step-description">
				Thanks for confirming your subscription! We hope you have fun
				using our platform. If you ever need support, please feel free
				to email us at support@loremgaming.com.
			</div>
		</StyledFormStepFive>
	);
}

const StyledFormStepFive = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.icon {
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 1rem;
	}

	.step-description {
		text-align: center;
		line-height: 1.5rem;
		
	}

`;

export default FormStepFive;
