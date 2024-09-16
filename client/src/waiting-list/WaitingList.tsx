import "./WaitingList.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
import { Input } from "@mui/material";
import { ChangeEvent, useState } from "react";


interface WaitingListProps {
	show: boolean
	onHide: () => void;
}

interface FormInput {
	firstName: string;
	lastName: string;
	company: string;
	email: string;
}

export const WaitingList = (props:WaitingListProps) => {
	const formStyles = {
		'backgroundColor': 'rgb(33, 37, 41)',
		'color': 'white'
	}
	const [formInput, setFormInput] = useState<FormInput>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
  });

	const handleFormInput = (e:ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;

		setFormInput(prevState => ({
			...prevState,
			[name]: value,
		}));
	}

	const handleFormSubmit = () => {
		console.log(formInput);
		props.onHide();
		setFormInput({
			firstName: '',
			lastName: '',
			company: '',
			email: '',
		})
	}

	return (
		<div className="waiting-list-container">
			<Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={formStyles} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Waiting List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={formStyles}>
				<form name="waiting-list" method="POST" data-netlify="true">
					<input type="hidden" name="form-name" value="waiting-list" />
					<div onChange={handleFormInput} className="form-container">
						<Input
							name="firstName" value={formInput.firstName}
							style={{color: 'white'}} placeholder="First Name"
						/>
						<Input
							name="lastName" value={formInput.lastName}
							style={{color: 'white'}} placeholder="Last Name"
						/>
						<Input
							name="company" value={formInput.company}
							style={{color: 'white'}} placeholder="Company"
						/>
						<Input
							name="email" value={formInput.email} type="email"
							style={{color: 'white'}} placeholder="Email"
						/>
					</div>
					<Button type="submit">Submit</Button>
				</form>
      </Modal.Body>
      {/* <Modal.Footer style={formStyles}>
        <Button >Submit</Button>
      </Modal.Footer> */}
    </Modal>
		</div>
	)
}