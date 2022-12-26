import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import FormOutline from "./components/form/FormOutline";

function App() {
	return (
		<StyledApp>
			<Fragment>
				<GlobalStyle />
				<FormOutline />
			</Fragment>
		</StyledApp>
	);
}

const StyledApp = styled.div`
	width: 100vw;
	height: 100vh;
		max-height: -webkit-fill-available;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 2rem;
	background-color: hsl(217, 100%, 97%);
	@media (max-width: 640px) { 
		padding: 0;
	}
`;

export default App;
