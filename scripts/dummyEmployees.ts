interface Employee {
  id: string
  firstName: string
  lastName: string
  preferredFullName: string
  jobTitle: string
  employeeCode: string
  emailAddress: string
  phoneNumber: string
  region: string
  yearsOfService: number
  specialty: string
}

export const dummyEmployees: Employee[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Taylor',
    preferredFullName: 'Sarah Taylor',
    jobTitle: 'Program Director',
    employeeCode: 'PD001',
    emailAddress: 'sarah.taylor@ngo.org',
    phoneNumber: '+1-555-123-4567',
    region: 'North America',
    yearsOfService: 8,
    specialty: 'Child Development',
  },
  {
    id: '2',
    firstName: 'Michael',
    lastName: 'Brown',
    preferredFullName: 'Michael Brown',
    jobTitle: 'Education Coordinator',
    employeeCode: 'EC002',
    emailAddress: 'michael.brown@ngo.org',
    phoneNumber: '+1-555-987-6543',
    region: 'South America',
    yearsOfService: 5,
    specialty: 'Pedagogy',
  },
  {
    id: '3',
    firstName: 'Emily',
    lastName: 'Chen',
    preferredFullName: 'Emily Chen',
    jobTitle: 'Nutrition Specialist',
    employeeCode: 'NS003',
    emailAddress: 'emily.chen@ngo.org',
    phoneNumber: '+1-555-246-8130',
    region: 'Europe',
    yearsOfService: 3,
    specialty: 'Child Nutrition',
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Lee',
    preferredFullName: 'David Lee',
    jobTitle: 'Counselor',
    employeeCode: 'CU004',
    emailAddress: 'david.lee@ngo.org',
    phoneNumber: '+1-555-369-2580',
    region: 'Africa',
    yearsOfService: 7,
    specialty: 'Child Psychology',
  },
  {
    id: '5',
    firstName: 'Lisa',
    lastName: 'Nguyen',
    preferredFullName: 'Lisa Nguyen',
    jobTitle: 'Administrative Manager',
    employeeCode: 'AM005',
    emailAddress: 'lisa.nguyen@ngo.org',
    phoneNumber: '+1-555-135-7920',
    region: 'Asia-Pacific',
    yearsOfService: 10,
    specialty: 'Non-Profit Management',
  },
  {
    id: '6',
    firstName: 'James',
    lastName: 'Patel',
    preferredFullName: 'James Patel',
    jobTitle: 'Fundraising Coordinator',
    employeeCode: 'FR006',
    emailAddress: 'james.patel@ngo.org',
    phoneNumber: '+1-555-246-8130',
    region: 'Global',
    yearsOfService: 4,
    specialty: 'Donor Relations',
  },
]
