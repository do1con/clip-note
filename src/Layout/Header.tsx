import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

function Header(): JSX.Element {
	return (
		<Container fluid>
			<Row>
				<Col>
					<H1>C</H1>
					<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
						<Tab eventKey="home" title="Home"></Tab>
						<Tab eventKey="profile" title="Profile"></Tab>
						<Tab eventKey="contact" title="Contact"></Tab>
					</Tabs>
				</Col>
			</Row>
		</Container>
	);
}

const H1 = styled.h1`
	background: linear-gradient(45deg, rgba(141, 197, 66, 1) 0%, rgba(195, 140, 206, 1) 87%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
	font-size: 540px;
	display: inline;
`;

export default Header;
