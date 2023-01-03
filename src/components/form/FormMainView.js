import React, { useState, useRef } from "react";
import styled from "styled-components";
import FormStepOne from "./FormSteps/FormStepOne";
import FormStepTwo from "./FormSteps/FormStepTwo";
import FormStepThree from "./FormSteps/FormStepThree";
import FormStepFour from "./FormSteps/FormStepFour";

function FormMainView({ formStep, setFormStep }) {
	const [yearly, setYearly] = useState(false);
	const inputRef = useRef([]);
	const requiredRef = useRef([]);

	const [userInfo, setUserInfo] = useState({
		name: null,
		email: null,
		phone: null,
		plan: {
			title: null,
			price: null,
		},
		addons: [],
	});

	const handleFormStepIncrease = () => {
		if (formStep === 3) {
			setFormStep(3);
		} else {
			setFormStep(formStep + 1);
		}
	};

	const handleFormStepDecrease = () => {
		if (formStep === 0) {
			setFormStep(0);
		} else {
			setFormStep(formStep - 1);
		}
	};

	const saveInputs = () => {
		setUserInfo({
			...userInfo,
			name: inputRef.current[0].value,
			email: inputRef.current[1].value,
			phone: inputRef.current[2].value,
		});
	};

	const checkInputs = () => {
		let outcome = true;
		requiredRef.current.forEach((warning) => {
			warning.style.display = "none";
		});
		inputRef.current.forEach((input, index) => {
			if (input.value === "") {
				requiredRef.current[index].style.display = "block";
				outcome = false;
			}
		});
		saveInputs();
		return outcome;
	};

	const formSteps = [
		<FormStepOne
			inputRef={inputRef}
			requiredRef={requiredRef}
			checkInputs={checkInputs}
			userInfo={userInfo}
		/>,
		<FormStepTwo
			yearly={yearly}
			setYearly={setYearly}
			setUserInfo={setUserInfo}
			userInfo={userInfo}
		/>,
		<FormStepThree
			yearly={yearly}
			setUserInfo={setUserInfo}
			userInfo={userInfo}
		/>,
		<FormStepFour
			yearly={yearly}
			setFormStep={setFormStep}
			userInfo={userInfo}
		/>,
	];

	return (
		<StyledFormMainView>
			<div className="main-form">{formSteps[formStep]}</div>
			<div className="main-navigation">
				{formStep > 0 && (
					<button
						className="back-button"
						onClick={handleFormStepDecrease}>
						Go Back
					</button>
				)}
				{formStep !== 4 && (
					<button
						className="next-button"
						onClick={() => {
							if (formStep === 0) {
								checkInputs() && handleFormStepIncrease();
							} else {
								handleFormStepIncrease();
							}
						}}>
						{formStep === 3 ? "Confirm" : "Next step"}
					</button>
				)}
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
			margin-left: auto;
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
