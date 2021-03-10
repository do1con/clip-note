import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Memos from './Memos';

function Header(): JSX.Element {
	return (
		<Container fluid>
			<Row>
				<Col lg="auto">
					<H1>Clip Note</H1>
				</Col>
				<Col>
					<Tabs defaultActiveKey="memos" style={{ marginTop: '5px', marginBottom: '5px' }}>
						<Tab eventKey="memos" title="Memos">
							<Memos />
						</Tab>
						<Tab eventKey="settings" title="Settings"></Tab>
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
	font-size: 35px;
	display: inline-block;
	margin-top: 5px;
	margin-bottom: 5px;
`;

export default Header;
