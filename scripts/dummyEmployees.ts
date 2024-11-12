interface Employee {
  firstName: string
  lastName: string
  jobTitle: string
  emailAddress: string
  specialty: string
}

export const dummyEmployees: Employee[] = [
  {
    firstName: 'Sarah',
    lastName: 'Taylor',
    jobTitle: 'Program Director',
    emailAddress: 'sarah.taylor@ngo.org',
    specialty: 'Child Development',
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    jobTitle: 'Education Coordinator',
    emailAddress: 'michael.brown@ngo.org',
    specialty: 'Pedagogy',
  },
  {
    firstName: 'Emily',
    lastName: 'Chen',
    jobTitle: 'Nutrition Specialist',
    emailAddress: 'emily.chen@ngo.org',
    specialty: 'Child Nutrition',
  },
  {
    firstName: 'David',
    lastName: 'Lee',
    jobTitle: 'Counselor',
    emailAddress: 'david.lee@ngo.org',
    specialty: 'Child Psychology',
  },
  {
    firstName: 'Lisa',
    lastName: 'Nguyen',
    jobTitle: 'Administrative Manager',
    emailAddress: 'lisa.nguyen@ngo.org',
    specialty: 'Non-Profit Management',
  },
  {
    firstName: 'James',
    lastName: 'Patel',
    jobTitle: 'Fundraising Coordinator',
    emailAddress: 'james.patel@ngo.org',
    specialty: 'Donor Relations',
  },
]
