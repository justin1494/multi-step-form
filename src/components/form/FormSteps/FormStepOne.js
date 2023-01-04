import React, { useState } from "react";
import styled from "styled-components";

const initialInputs = [
	{
		name: "name",
		label: "Name",
		placeholder: "e.g. Stephen King",
		type: "text",
		value: null,
	},
	{
		name: "email",
		label: "Email Address",
		placeholder: "e.g. stephenking@lorem.com",
		type: "email",
		value: null,
	},
	{
		name: "phone",
		label: "Phone Number",
		placeholder: "e.g. +1 234 567 890",
		type: "tel",
		value: null,
	},
];

function FormStepOne({ inputRef, requiredRef, userInfo }) {
	const [inputs, setInputs] = useState(initialInputs);



	return (
		<StyledFormStepOne>
			<h1>Personal info</h1>
			<p>Please provide your name, email address, and phone number.</p>
			{inputs.map((input, index) => (
				<div className="input">
					<label htmlFor={input.name}>{input.label}</label>
					<p
						className="required"
						ref={(element) =>
							(requiredRef.current[index] = element)
						}>
						This field is required
					</p>
					<input
						id={input.name}
						name={input.name}
						type={input.type}
						placeholder={input.placeholder}
						ref={(element) => (inputRef.current[index] = element)}
						defaultValue={Object.values(userInfo)[index]}
					/>
				</div>
			))}
		</StyledFormStepOne>
	);
}

const StyledFormStepOne = styled.div`
	h1 {
		margin-bottom: 0.5rem;
		color: hsl(213, 96%, 18%);
	}
	p {
		margin-bottom: 2rem;
		color: hsl(231, 11%, 63%);
		font-size: 16px;
		font-weight: 400;
	}

	.input {
		position: relative;
		margin: 1.5rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;

		.required {
			display: none;
			top: 0;
			right: 0;
			position: absolute;
			margin: 0;
			color: hsl(354, 84%, 57%);
			font-weight: 500;
		}

		label {
			margin-bottom: 0.5rem;
			color: hsl(213, 96%, 18%);
		}
		input {
			height: 50px;
			padding-left: 1rem;
			border: 1px solid hsl(229, 24%, 87%);
			border-radius: 0.5rem;
			font-size: 16px;
			font-weight: 500;

			::placeholder {
				color: hsl(231, 11%, 63%);
			}
		}
	}
	@media (max-width: 640px) {
		p {
			margin-bottom: 1rem;
		}
	}
`;

export default FormStepOne;
