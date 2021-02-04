import React, { useState } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from '../../api';

const RegisterForm = ({ closeModal }) => {

	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [gender, setGender] = useState('Select');
	const [email, setEmail] = useState('');
	const [startDate, setStartDate] = useState('');
	const [team, setTeam] = useState('Mobile');
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {name, cpf, birthDate, gender, email, startDate, team};
		try {
			await api.post('/api/employees', data);
		} catch (err) {
			console.log(err);
		}
		closeModal();
	}

  return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col>
					<FormGroup>
						<Label>Name</Label>
						<Input 
							type="text" 
							name="name" 
							defaultValue={name}
							onChange={e => setName(e.target.value)}
							placeholder="Insert employee's full name" 
							required 
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Label>CPF</Label>
						<Input 
							type="text" 
							name="cpf" 
							defaultValue={cpf}
							onChange={e => setCpf(e.target.value)}
							placeholder="Insert employee's CPF" 
							required 
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<FormGroup>
						<Label>Birth Date</Label>
						<Input 
							type="date" 
							name="birthDate" 
							defaultValue={birthDate}
							onChange={e => setBirthDate(e.target.value)}
							required
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Label>Gender</Label>
						<Input 
							type="select" 
							name="gender" 
							defaultValue={gender}
							onChange={e => setGender(e.target.value)}
							required
						>
							<option>Select</option>
							<option>Female</option>
							<option>Male</option>
						</Input>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<FormGroup>
						<Label>Email</Label>
						<Input 
							type="email" 
							name="email" 
							defaultValue={email}
							onChange={e => setEmail(e.target.value)}
							placeholder="Insert employee's email" 
							required 
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Label>Start Date</Label>
						<Input 
							type="datetime" 
							name="startDate" 
							defaultValue={startDate}
							onChange={e => setStartDate(e.target.value)}
							placeholder="MM/YYYY" 
							required 
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Label>Team</Label>
						<Input 
							type="select" 
							name="team" 
							defaultValue={team}
							onChange={e => setTeam(e.target.value)}
						>
							<option>None</option>
							<option>Mobile</option>
							<option>Frontend</option>
							<option>Backend</option>
						</Input>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col style={{display: "flex", gap: "20px", justifyContent: "flex-end", marginTop: "20px"}}>
					<Button color="success" type="submit">
						Register
					</Button>
					<Button color="danger" onClick={closeModal}>
						Cancel
					</Button>
				</Col>
			</Row>
		</Form>
	);
}

export default RegisterForm;
