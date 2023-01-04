import React from "react";
import styled from "styled-components";
import { ReactComponent as IconThankYou } from "../../../assets/images/icon-thank-you.svg";

function FormStepFive() {
	return (
		<StyledFormStepFive>
			<IconThankYou className="icon" />
			<h1>Thank you!</h1>
			<div className="subtitle">
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
		color: hsl(213, 96%, 18%);
	}
	.subtitle {
		margin-bottom: 2rem;
		text-align: center;
		color: hsl(231, 11%, 63%);
		font-size: 16px;
		font-weight: 400;
		line-height: 1.5rem;
	}

`;

export default FormStepFive;
