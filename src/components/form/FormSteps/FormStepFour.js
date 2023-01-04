import React from "react";
import styled from "styled-components";

function FormStepFour({ yearly, setFormStep, userInfo }) {

	let addonsPriceSum = 0

	userInfo.addons.forEach(addon => {
		addonsPriceSum += addon.price
	});

	const priceSum = userInfo.plan.price + addonsPriceSum
	

	return (
		<StyledFormStepThree>
			<h1>Finishing up</h1>
			<p className="subtitle">
				Double-check everything looks OK before confirming.
			</p>
			<div className="services">
				<div className="selected-plan">
					<div className="plan-name">
						<div className="name">{`${userInfo.plan.title} ${
							yearly ? "(Yearly)" : "(Monthly)"
						}`}</div>
						<button onClick={() => setFormStep(1)}>Change</button>
					</div>
					<div className="plan-price">{`$${userInfo.plan.price}${
						yearly ? "0/yr" : "/mo"
					}`}</div>
				</div>
				{userInfo.addons.map((addon) => {
					return (
						<div className="selected-addon">
							<div className="addon-name">{addon.title}</div>
							<div className="addon-price">{`+$${addon.price}${
								yearly ? "0/yr" : "/mo"
							}`}</div>
						</div>
					);
				})}
			</div>
			<div className="summary">
				<div className="summary-name">{`Total ${
					yearly ? "(per year)" : "(per month)"
				}`}</div>
				<div className="summary-price">{`$${priceSum}${
					yearly ? "0/yr" : "/mo"
				}`}</div>
			</div>
		</StyledFormStepThree>
	);
}

const StyledFormStepThree = styled.div`
	height: 100%;

	h1 {
		margin-bottom: 0.5rem;
		color: hsl(213, 96%, 18%);
	}
	.subtitle {
		margin-bottom: 2rem;
		color: hsl(231, 11%, 63%);
		font-size: 16px;
		font-weight: 400;
	}

	.services {
		width: 100%;
		height: auto;
		display: flex;
		padding: 1.5rem;
		border-radius: 0.5rem;
		flex-direction: column;
		background-color: hsl(230, 75%, 98%);
	}

	.selected-plan,
	.selected-addon {
		display: flex;
		justify-content: space-between;
	}

	.selected-plan {
		padding-bottom: 1.5rem;
		margin-bottom: 1rem;
		font-weight: 700;
		border-bottom: 2px var(--light-gray) solid;
		color: hsl(212, 49%, 27%);

		.plan-name {
			.name {
				margin-bottom: 0.5rem;
			}
			button {
				font-weight: 400;
				border: none;
				background-color: transparent;
				text-decoration: underline;
				color: hsl(223, 5%, 74%);
				cursor: pointer;
			}
		}
	}

	.selected-addon {
		margin: 0.5rem 0rem;

		.addon-name {
			color: hsl(223, 5%, 74%);
		}
		.addon-price {
			font-weight: 500;
			color: hsl(212, 49%, 27%);
		}
	}

	.summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 1rem;
		color: hsl(223, 5%, 74%);

		.summary-price {
			color: var(--purplish-blue);
			font-weight: 700;
			font-size: 20px;
		}
	}

	@media (max-width: 640px) {
		background-color: #fff;
		p {
			margin-bottom: 1rem;
		}
	}
`;

export default FormStepFour;
