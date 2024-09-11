import "./WaitingList.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface WaitingListProps {
	show: boolean
	onHide: () => void;
}

export const WaitingList = (props:WaitingListProps) => {
	const formStyles = {
		'backgroundColor': 'rgb(33, 37, 41)',
		'color': 'white'
	}

	return (
		<div className="waiting-list-container">
			<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Waiting List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-container">
					<Form >
						<Form.Control style={formStyles} className="form-input" type="name" placeholder="Enter Your Name" />
						<Form.Control style={formStyles} className="form-input" type="company" placeholder="Enter Your Company" />
						<Form.Control style={formStyles} className="form-input" type="email" placeholder="Enter Your Email" />
					</Form>
				</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
		</div>
	)
}