import React, { useEffect, useState } from 'react';
import {
	Navbar, NavbarBrand, Nav,
	Container, Button, Table, Modal,
	ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import api from '../../api';
import { FiSettings, FiTrash2 } from 'react-icons/fi';
import './styles.css'
import RegisterModal from '../RegisterModal';
import EditModal from '../EditModal';

const Main = () => {

	const [modal, setModal] = useState(false);
	const [employees, setEmployees] = useState([]);

	const toggle = () => setModal(!modal);

	useEffect(() => {
		async function ListEmployees() {
			try {
				const response = await api.get("/api/employees");
				setEmployees(response.data);
			} catch (err) {
				console.log(err);
			};
		};
		ListEmployees();
	}, [employees]);


	const handleDeleteEmployee = async (id) => {
		try {
			await api.delete(`/api/employees/${id}`);
		} catch (err) {
			console.log(err);
		}
		toggle();
	}

	return (
		<>
			<Navbar className="navigation-menu">
				<NavbarBrand href="/" style={{ color: '#111' }}>
					Employee Management
				</NavbarBrand>
				<Nav className="ml-auto" navbar>
					<RegisterModal buttonLabel="Register employee" />
				</Nav>
			</Navbar>
			<Container>
				<Table responsive borderless className="employee-info">
					<thead className="info-title">
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Start Date</th>
							<th>Team</th>
							<th>
								<FiSettings size={22} />
							</th>
						</tr>
					</thead>
					<tbody>
						{employees.map(employee => (
							<tr key={employee.id}>
								<td>{employee.name}</td>
								<td>{employee.email}</td>
								<td>{employee.startDate}</td>
								<td>{employee.team}</td>
								<td className="action-buttons">
									<div>
										<Button color="danger" onClick={toggle}><FiTrash2 /></Button>
										<Modal isOpen={modal} toggle={toggle} backdrop={true} keyboard={true}>
											<ModalHeader toggle={toggle}>Delete Employee</ModalHeader>
											<ModalBody>
												<h5>Are you sure you want to delete it?</h5>
											</ModalBody>
											<ModalFooter>
												<Button color="danger" onClick={() => handleDeleteEmployee(employee.id)}>Yes, I am</Button>
												<Button color="secondary" onClick={toggle}>Cancel</Button>
											</ModalFooter>
										</Modal>
									</div>
									<EditModal employee={employee} />
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</>
	)
}

export default Main;
