import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import checkboxTick from "../../../assets/images/icon-checkmark.svg";
import { fadeIn } from "react-animations";

const initilaAddons = [
	{
		id: 0,
		title: "Online service",
		subtitle: "Access to multiplayer games",
		price: 1,
		selected: false,
	},
	{
		id: 1,
		title: "Larger storage",
		subtitle: "Extra 1TB of cloud save",
		price: 2,
		selected: false,
	},
	{
		id: 2,
		title: "Customizable Profile",
		subtitle: "Custom theme on your profile",
		price: 2,
		selected: false,
	},
];

const fadeInAnimation = keyframes`${fadeIn}`;

function FormStepThree({ yearly, setUserInfo, userInfo }) {
	const [addons, setAddons] = useState(initilaAddons);

	const handleAddonSelect = (addonId) => {
		setAddons(
			addons.map((addon) => {
				if (addon.id === addonId) {
					if (addon.selected) {
						return { ...addon, selected: false };
					}
					return { ...addon, selected: true };
				}
				return { ...addon };
			})
		);
	};

	const checkIfSelected = () => {
		let selectedAddons = [];

		addons.forEach((addon) => {
			if (addon.selected) {
				selectedAddons = [
					...selectedAddons,
					{
						title: addon.title,
						price: addon.price,
					},
				];
			}
		});
		setUserInfo({ ...userInfo, addons: selectedAddons });
	};

	useEffect(() => {
		let userAddons = [];
		userInfo.addons.forEach((element) => {
			userAddons = [...userAddons, element.title];
		});

		setAddons(
			addons.map((addon) => {
				if (userAddons.includes(addon.title)) {
					return { ...addon, selected: true };
				}
				return { ...addon };
			})
		);
	}, []);

	useEffect(() => {
		checkIfSelected();
	}, [addons]);

	return (
		<StyledFormStepThree>
			<h1>Pick add-ons</h1>
			<p className="step-description">
				Add-ons help enhance your gaming experience.
			</p>

			<div className="addons">
				{addons.map((addon) => (
					<div
						className={`addon ${addon.selected ? "selected" : ""}`}
						onClick={() => {
							handleAddonSelect(addon.id);
						}}
						key={addon.id}>
						<div className="checkbox">
							{addon.selected && (
								<img src={checkboxTick} alt="checkbox tick" />
							)}
						</div>
						<div className="addon-name">
							<div className="addon-title">{addon.title}</div>
							<div className="addon-subtitle">
								{addon.subtitle}
							</div>
						</div>
						<div className="addon-price">{`+$${addon.price}${
							yearly ? "0/yr" : "/mo"
						}`}</div>
					</div>
				))}
			</div>
		</StyledFormStepThree>
	);
}

const StyledFormStepThree = styled.div`

	.addons {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.addon {
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 0.5rem;
		border: 1px solid var(--light-gray);
		cursor: pointer;

		:hover {
			border: 1px solid var(--purple);
		}
	}

	.selected {
		background-color: var(--purple-light);
		border: 1px solid var(--purple);
	}

	.checkbox {
		aspect-ratio: 1/1;
		height: 20px;
		margin: 0 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.2rem;
		background-color: var(--purplish-blue);

		img {
			animation: 0.3s ${fadeInAnimation};
		}
	}

	.addon-title {
		margin-bottom: 0.2rem;
		color: var(--marine-blue);
		font-weight: 500;
		font-size: 17px;
	}
	.addon-subtitle {
		color: var(--cool-gray);
	}
	.addon-price {
		margin-left: auto;
		margin-right: 2rem;
		color: var(--purple);
		font-weight: 500;
	}

	@media (max-width: 640px) {
		background-color: var(--white);
		p {
			margin-bottom: 1rem;
		}
		.addon {
			font-size: 14px;
		}

		.checkbox {
			margin: 0 1rem;
		}
		.addon-price {
			margin-right: 1rem;
		}

	}
`;

export default FormStepThree;
