
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          name: "Julius Rock",
          birthDate: "10/05/1953",
          gender: "Male",
          email: "julius@nutcache.com",
          cpf: 11122233344,
          startDate: "01/1998",
          team: "None"
        },
        {
          name: "Rochelle Rock",
          birthDate: "12/03/1956",
          gender: "Female",
          email: "rochelle@nutcache.com",
          cpf: 11122233355,
          startDate: "01/2000",
          team: "Backend"
        },
        {
          name: "Chris Rock",
          birthDate: "23/10/1970",
          gender: "Male",
          email: "chris@nutcache.com",
          cpf: 11122233366,
          startDate: "02/2021",
          team: "Frontend"
        },
        {
          name: "Drew Rock",
          birthDate: "03/08/1971",
          gender: "Male",
          email: "drew@nutcache.com",
          cpf: 11122233377,
          startDate: "05/2021",
          team: "Backend"
        },
        {
          name: "Tonya Rock",
          birthDate: "15/05/1973",
          gender: "Female",
          email: "tonya@nutcache.com",
          cpf: 11122233388,
          startDate: "08/2021",
          team: "Mobile"
        }
      ]);
    });
};
