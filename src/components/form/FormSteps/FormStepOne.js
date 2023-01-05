import React from "react";
import styled from "styled-components";

const inputs = [
	{
		id: 1,
		name: "name",
		label: "Name",
		placeholder: "e.g. Stephen King",
		type: "text",
		value: null,
	},
	{
		id: 2,
		name: "email",
		label: "Email Address",
		placeholder: "e.g. stephenking@lorem.com",
		type: "email",
		value: null,
	},
	{
		id: 3,
		name: "phone",
		label: "Phone Number",
		placeholder: "e.g. +1 234 567 890",
		type: "tel",
		value: null,
	},
];

function FormStepOne({ inputRef, requiredRef, userInfo }) {

	return (
		<StyledFormStepOne>
			<h1>Personal info</h1>
			<p className="step-description">Please provide your name, email address, and phone number.</p>
			{inputs.map((input, index) => (
				<div className="input" key={input.id}>
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
			color: var(--strawberry-red);
			font-weight: 500;
		}

		label {
			margin-bottom: 0.5rem;
			color: var(--marine-blue);
			font-size: 14px;
			font-weight: 500;
		}
		input {
			height: 50px;
			padding-left: 1rem;
			color: var(--marine-blue);
			border: 1px solid var(--cool-gray);
			border-radius: 0.5rem;
			font-size: 16px;
			font-weight: 500;

			:focus {
				outline: none;
				border: 1px solid var(--purplish-blue);
			}

			::placeholder {
				color: var(--cool-gray);
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
