const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		try {
			const employees = await connection('employees');

			return response.json(employees);
		} catch (err) {
			console.log(err);
		}

	},

	async show(request, response) {
		try {
			const { id } = request.params;

			const employee = await connection('employees').where({ id });

			return response.json(employee);
		} catch (err) {
			console.log(err);
		}

	},

	async create(request, response) {
		try {
			const { name, birthDate, gender, email,
				cpf, startDate, team } = request.body;

			await connection('employees').insert({
				name,
				birthDate,
				gender,
				email,
				cpf,
				startDate,
				team
			});

			return response.status(201).send();
		} catch (err) {
			console.log(err)
		}

	},

	async update(request, response) {
		try {
			const { name, birthDate, gender, email,
				cpf, startDate, team } = request.body;
			const { id } = request.params;

			await connection('employees').update({
				name,
				birthDate,
				gender,
				email,
				cpf,
				startDate,
				team
			}).where({ id });

			return response.send();
		} catch (err) {
			console.log(err)
		}
	},

	async delete(request, response) {
		try {
			const { id } = request.params;

			await connection('employees').where({ id }).delete();

			return response.status(204).send();
		} catch (err) {
			console.log(err);
		}
	}
};