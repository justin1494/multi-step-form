import React from "react";
import styled from "styled-components";
import sidebarBackgroundDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import sidebarBackgroundMobile from "../../assets/images/bg-sidebar-mobile.svg";

const steps = [
	{
		id: 0,
		number: 1,
		step: "Step 1",
		description: "Your info",
		active: false,
	},
	{
		id: 1,
		number: 2,
		step: "Step 2",
		description: "Select plan",
		active: false,
	},
	{ id: 2, number: 3, step: "Step 3", description: "Add-ons", active: false },
	{ id: 3, number: 4, step: "Step 4", description: "Summary", active: false },
];
function FormSidebar({ formStep }) {
	return (
		<StyledSidebar>
			{steps.map((step, index) => (
				<div className="form-steps">
					<div className={`number ${index === formStep && "active"}`}>
						{step.number}
					</div>
					<div className="step-information">
						<p className="step">{step.step}</p>
						<p className="description">{step.description}</p>
					</div>
				</div>
			))}
		</StyledSidebar>
	);
}

const StyledSidebar = styled.div`
	width: 30%;
	height: auto;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	margin: 1rem;
	padding: 2rem;
	border-radius: 1rem;
	background-image: url(${sidebarBackgroundDesktop});
	background-size: cover;
	box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
		rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

	.form-steps {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
		text-transform: uppercase;
	}

	.number {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		border: 1px solid white;
		border-radius: 50%;
		color: white;
		font-weight: 700;
	}
	.active {
		background-color: var(--light-blue);
		color: black;
	}
	.step-information {
		height: 35px;
		margin-left: 1rem;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		font-weight: 500;
		color: white;

		.step {
			color: hsl(231, 11%, 63%);
			font-size: 0.8rem;
		}
		.description {
			letter-spacing: 1px;
		}
	}
	@media (max-width: 860px) {
		align-items: center;
		padding-top: 1rem;

		.number {
			margin: 0.3rem 0;
		}

		.form-steps {
			width: 100%;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.step-information {
			margin: 0;
			font-size: smaller;
			align-items: center;
		}
	}
	@media (max-width: 640px) {
		height: 150px;
		width: 100%;
		margin: 0;
		justify-content: center;
		align-items: flex-start;
		flex-direction: row;
		gap: 1rem;
		border-radius: 0;
		background-image: url(${sidebarBackgroundMobile});

		.form-steps {
			margin: 1rem 0;
			width: auto;
		}
		.step-information {
			display: none;
		}
	}
`;

export default FormSidebar;
