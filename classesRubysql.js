// # app/models/employee.rb
// class Employee < ApplicationRecord
//   belongs_to :team
//   belongs_to :job_title

//   def nome_completo
//     "#{first_name} #{last_name}"
//   end
// end

// # app/models/team.rb
// class Team < ApplicationRecord
//   has_many :employees
// end

// # app/models/job_title.rb
// class JobTitle < ApplicationRecord
//   has_many :employees
// end

// query com active records

// Employee.joins(:team, :job_title)
//         .select("employees.first_name || ' ' || employees.last_name AS nome_completo, employees.cpf, teams.name AS equipe, job_titles.name AS cargo")
//         .order(:cpf)