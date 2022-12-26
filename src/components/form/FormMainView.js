import React from "react";
import styled from "styled-components";
import FormStepOne from "./FormSteps/FormStepOne";
import FormStepTwo from "./FormSteps/FormStepTwo";

function FormMainView() {
	return (
		<StyledFormMainView>
			<div className="main-form">
				<FormStepTwo />
			</div>
			<div className="main-navigation">
				<button className="back-button">Go Back</button>
				<button className="next-button">Next Step</button>
			</div>
		</StyledFormMainView>
	);
}

const StyledFormMainView = styled.div`
	width: 70%;
	height: auto;
	margin-top: 2rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;

	.main-form {
		width: 75%;
		height: 70%;
		background-color: white;
	}
	.main-navigation {
		width: 75%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			height: 45px;
			width: 120px;
			border: none;
			border-radius: 0.5rem;
			font-size: 16px;
			font-weight: 700;
			cursor: pointer;
		}
		.back-button {
			width: auto;
			background: none;
			color: hsl(231, 11%, 63%);
			
		}
		.next-button {
			background-color: hsl(213, 96%, 18%);
			color: hsl(229, 24%, 87%);
            :hover {
				background-color: hsl(214, 72%, 32%);
			}
		}
	}
	@media (max-width: 640px) {
		width: 100%;

		.main-form {
			position: absolute;
			top: 100px;
			left: 50%;
			width: 90%;
			height: 70%;
			padding: 2rem 1.5rem;
			border-radius: 1rem;
			transform: translateX(-50%);
			box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
				rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
		}
		.main-navigation {
			background-color: #fff;
			width: 100%;
			padding: 1rem;
		}
	}
`;

export default FormMainView;
