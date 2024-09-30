import { ChangeEvent, FormEvent, useState } from 'react';
import './ContactUs.css';
import { Input, TextField } from '@mui/material';
import { Button, Card } from 'react-bootstrap';
import { Line } from '../../Line';

interface FormInput {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}

const encode = (data:any) => {
	return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
}

export const ContactUs = () => {
	const [formInput, setFormInput] = useState<FormInput>({
    firstName: '',
    lastName: '',
    email: '',
		message: ''
  });

	const handleFormInput = (e:ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;

		setFormInput(prevState => ({
			...prevState,
			[name]: value,
		}));
	}

	const handleFormSubmit = async (e:FormEvent) => {
		e.preventDefault();
		const response = await fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact-us", ...formInput })
		})
		if (response.ok) {
			setFormInput({
				firstName: '',
				lastName: '',
				email: '',
				message: ''
			})
		} else {
			console.log('handle failure')
		}
		// console.log(formInput);
	}
	return (
		<div className='contact-us-container'>
			<div className='title-with-lines'>
						<Line />
						<h1>CONTACT US</h1>
						<Line />
					</div>
			<form name="contact-us" method="POST" data-netlify="true">
					<input type="hidden" name="form-name" value="contact-us" />
					<div onChange={handleFormInput} className="form-container">
						<Card bg='light' text='black' style={{ opacity: '0.7' }}>
								<Card.Body>
								<Input
									name="firstName" value={formInput.firstName}
									placeholder="First Name"
								/>
								<Input
									name="lastName" value={formInput.lastName}
									placeholder="Last Name"
								/>
								<Input
									name="email" value={formInput.email} type="email"
									placeholder="Email"
								/>
								<TextField
									name="message"
									value={formInput.message}
									placeholder="Message"
									multiline
									rows={5}          // Number of visible text lines
									fullWidth         // Makes the text area full width
									variant="outlined"  // Optional: adds a border around the textarea
								/>
								</Card.Body>
								<div className='contact-us button'>
									<Button size='lg' onSubmit={handleFormSubmit} type="submit">Submit</Button>
								</div>
						</Card>
					</div>
				</form>
		</div>
	)
}