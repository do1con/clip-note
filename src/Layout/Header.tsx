import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Header(): JSX.Element {
	return (
		<Container fluid>
			<Row>
				<Col>
					<h1>Clip Note</h1>
				</Col>
			</Row>
		</Container>
	);
}

export default Header;
