import "./WaitingList.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { Input } from "@mui/material";
import { FormEvent, useState } from "react";


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

const encode = (data:any) => {
	return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
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

	// const handleFormInput = (e:ChangeEvent<HTMLInputElement>) => {
	// 	const {name, value} = e.target;

	// 	setFormInput(prevState => ({
	// 		...prevState,
	// 		[name]: value,
	// 	}));
	// }

	const handleFormSubmit = async (e:FormEvent) => {
		e.preventDefault();
		const response = await fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "waiting-list", ...formInput })
		})
		if (response.ok) {
			props.onHide();
			setFormInput({
				firstName: '',
				lastName: '',
				company: '',
				email: '',
			})
		} else {
			console.log('handle failure')
		}
		// console.log(formInput);
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
					{/* <div onChange={handleFormInput} className="form-container"> */}
						<input
							name="firstName" value={formInput.firstName}
							style={{color: 'white'}} placeholder="First Name"
						/>
						<input
							name="lastName" value={formInput.lastName}
							style={{color: 'white'}} placeholder="Last Name"
						/>
						<input
							name="company" value={formInput.company}
							style={{color: 'white'}} placeholder="Company"
						/>
						<input
							name="email" value={formInput.email} type="email"
							style={{color: 'white'}} placeholder="Email"
						/>
					{/* </div> */}
					<Button onSubmit={handleFormSubmit} type="submit">Submit</Button>
				</form>
      </Modal.Body>
      {/* <Modal.Footer style={formStyles}>
        <Button >Submit</Button>
      </Modal.Footer> */}
    </Modal>
		</div>
	)
}