import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as IconArcade } from "../../../assets/images/icon-arcade.svg";
import { ReactComponent as IconAdvanced } from "../../../assets/images/icon-advanced.svg";
import { ReactComponent as IconPro } from "../../../assets/images/icon-pro.svg";

const initialPlans = [
	{
		id: 0,
		title: "Arcade",
		price: "$9",
		img: <IconArcade />,
		selected: false,
	},
	{
		id: 1,
		title: "Advanced",
		price: "$12",
		img: <IconAdvanced />,
		selected: false,
	},
	{
		id: 2,
		title: "Pro",
		price: "$15",
		img: <IconPro />,
		selected: false,
	},
];
const planYearlyAnimate = keyframes`
0% {
	opacity: 0;
	height: 0;
}
100% {
	opacity: 1;
	height: 100px;
}

`;

function FormStepTwo({ yearly, setYearly, setUserInfo, userInfo }) {
	const [plans, setPlans] = useState(initialPlans);

	const checkIfSelected = () => {
		setPlans(
			plans.map((plan) => {
				if (plan.title === userInfo.plan.title) {
					return { ...plan, selected: true };
				}
				return { ...plan, selected: false };
			})
		);
		return;
	};

	useEffect(() => {
		checkIfSelected();
	}, []);

	const handlePlanSelect = (planId) => {
		setPlans(
			plans.map((plan) => {
				if (plan.id === planId) {
					setUserInfo({
						...userInfo,
						plan: { title: plan.title, price: plan.price },
					});
					return { ...plan, selected: true };
				}
				return { ...plan, selected: false };
			})
		);
	};

	const handleSwitch = () => {
		setYearly(!yearly);
	};

	return (
		<StyledFormStepOne>
			<h1>Select Plan</h1>
			<p className="subtitle">
				You have the option of monthly or yearly billing.
			</p>

			<div className="plans">
				{plans.map((plan, i) => (
					<div
						key={i}
						className={`plan ${plan.selected && "selected"} ${
							yearly && "plan-animate"
						}`}
						onClick={() => {
							handlePlanSelect(plan.id);
						}}>
						<div className="plan-img">{plan.img}</div>
						<div className="plan-description">
							<div className="plan-title">{plan.title}</div>
							<div className="plan-price">{`${plan.price}${
								yearly ? "0/yr" : "/mo"
							}`}</div>
							{yearly && (
								<div className="plan-yearly">2 months free</div>
							)}
						</div>
					</div>
				))}
			</div>
			<div className="plan-length">
				<p className={`monthly ${!yearly && "activated"}`}>Monthly</p>
				<div className="switch" onClick={handleSwitch}>
					<div
						className={
							yearly
								? "switch-ball switch-ball-activate"
								: "switch-ball"
						}></div>
				</div>
				<p className={`yearly ${yearly && "activated"}`}>Yearly</p>
			</div>
		</StyledFormStepOne>
	);
}

const StyledFormStepOne = styled.div`
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

	.plans {
		display: flex;
		justify-content: space-between;

		.plan {
			height: 180px;
			width: 30%;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			padding: 1rem;
			border-radius: 0.5rem;
			border: 1px solid hsl(229, 24%, 87%);
			cursor: pointer;

			:hover {
				border: 1px solid hsl(213, 96%, 18%);
			}
		}
		.selected {
			background-color: hsl(217, 100%, 97%);
			border: 1px solid hsl(213, 96%, 18%);
		}
	}

	.plan-img {
		margin-bottom: 2rem;
	}

	.plan-title {
		margin-bottom: 0.2rem;
		color: hsl(213, 96%, 18%);
		font-weight: 500;
		font-size: 17px;
	}

	.plan-price {
		color: hsl(231, 11%, 63%);
		margin: 0.5rem 0;
	}

	.plan-yearly {
		color: hsl(213, 96%, 18%);
		letter-spacing: -0.5px;
		font-weight: 500;
		animation: 1s ${planYearlyAnimate} ease-in-out;
	}

	img {
		width: 100px;
		height: 100px;
	}

	.plan-length {
		width: 100%;
		height: 50px;
		margin-top: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		background-color: hsl(217, 100%, 97%);

		p {
			display: flex;
			align-items: center;
			width: 100px;
			margin: 0 1rem;
			color: hsl(231, 11%, 63%);
		}

		.monthly {
			justify-content: flex-end;
		}
		.activated {
			font-weight: 500;
			color: hsl(213, 96%, 18%) !important;
			transition: color 0.3s;
		}

		.switch {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 50px;
			height: 50%;
			border-radius: 50px;
			background-color: hsl(213, 96%, 18%);
			cursor: pointer;

			.switch-ball {
				height: 63%;
				margin: 0 0.3rem;
				aspect-ratio: 1/1;
				border-radius: 50%;
				background-color: #fff;
				transition: all 0.5s;
			}
		}
		.switch-ball-activate {
			transform: translateX(25px);
		}
	}

	@media (max-width: 640px) {
		background-color: #fff;

		p {
			margin-bottom: 1rem;
		}

		.subtitle {
			margin-bottom: 1rem;
		}
		.plans {
			flex-direction: column;
			gap: 0.5rem;

			.plan {
				height: 85px;
				width: 100%;
				justify-content: flex-start;
				flex-direction: row;
				gap: 1rem;

				.plan-title,
				.plan-price,
				.plan-yearly {
					font-size: 14px;
				}
				.plan-title {
					margin-bottom: 0.1rem;
				}

				.plan-price {
					margin: 0;
				}

				.plan-img {
					margin-bottom: 0;
				}
				.plan-yearly {
					margin-top: 0.1rem;
				}
			}
		}

		.plan-length {
			margin-top: 1rem;
		}
	}
`;

export default FormStepTwo;
