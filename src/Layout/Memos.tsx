import React, { useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form } from 'react-bootstrap';

function Memos(): JSX.Element {
	const resizeTextArea = (textAreaRef: React.RefObject<HTMLTextAreaElement>) => {
		textAreaRef.current!.style.height = '1px';
		textAreaRef.current!.style.height = `${textAreaRef.current!.scrollHeight}px`;
	};
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	return (
		<Container fluid>
			<Row>
				<Col lg="auto">
					<TextBoxWrapper>
						<Form>
							<Form.Group controlId="memoTextForm">
								<Form.Control
									as="textarea"
									placeholder="Type here."
									ref={textAreaRef}
									onKeyDown={() => resizeTextArea(textAreaRef)}
									onKeyUp={() => resizeTextArea(textAreaRef)}
									style={{
										overflow: 'hidden',
										transition: 'height 200ms',
									}}
								/>
							</Form.Group>
						</Form>
					</TextBoxWrapper>
				</Col>
			</Row>
		</Container>
	);
}

export default Memos;

const TextBoxWrapper = styled.div`
	margin-top: 5px;
	margin-right: 5px;
	margin-bottom: 5px;
`;
