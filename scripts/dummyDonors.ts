interface Donor {
  name: string
  email: string
  startDate: string
  monthlyDonation: number
  status: string
  lastDonationDate?: string
  totalDonated?: number
  frequency?: string
  paymentMethod?: string
  notes?: string
}

export const dummyDonors: Donor[] = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    startDate: '2023-01-01',
    monthlyDonation: 50.0,
    status: 'Active',
    lastDonationDate: '2023-12-31',
    totalDonated: 600.0,
    frequency: 'Monthly',
    paymentMethod: 'Credit Card',
    notes: 'Regular supporter since inception',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    startDate: '2019-06-15',
    monthlyDonation: 75.0,
    status: 'Active',
    lastDonationDate: '2023-11-30',
    totalDonated: 1350.0,
    frequency: 'Monthly',
    paymentMethod: 'Bank Transfer',
    notes:
      'Increased donation amount in 2022 due to successful fundraising campaign',
  },
  {
    name: 'Bob Johnson',
    email: 'bob@example.com',
    startDate: '2022-03-20',
    monthlyDonation: 30.0,
    status: 'Active',
    lastDonationDate: '2023-09-15',
    totalDonated: 270.0,
    frequency: 'Monthly',
    paymentMethod: 'PayPal',
    notes: 'New donor who started after our social media campaign',
  },
  {
    name: 'Alice Brown',
    email: 'alice@example.com',
    startDate: '2018-09-01',
    monthlyDonation: 25.0,
    status: 'Inactive',
    lastDonationDate: '2022-08-31',
    totalDonated: 450.0,
    frequency: 'Monthly',
    paymentMethod: 'Check',
    notes:
      "Has been inactive since moving abroad; we're working on re-engagement",
  },
  {
    name: 'Mike Davis',
    email: 'mike@example.com',
    startDate: '2023-05-01',
    monthlyDonation: 40.0,
    status: 'Active',
    lastDonationDate: '2023-12-31',
    totalDonated: 320.0,
    frequency: 'Monthly',
    paymentMethod: 'Credit Card',
    notes: 'Started donating after attending our fundraising event',
  },
  {
    name: 'Sarah Lee',
    email: 'sarah@example.com',
    startDate: '2017-02-15',
    monthlyDonation: 35.0,
    status: 'Active',
    lastDonationDate: '2023-10-31',
    totalDonated: 1050.0,
    frequency: 'Monthly',
    paymentMethod: 'Bank Transfer',
    notes:
      'Increased donation amount in 2023 due to successful fundraising campaign',
  },
  {
    name: 'Tom Harris',
    email: 'tom@example.com',
    startDate: '2022-07-20',
    monthlyDonation: 45.0,
    status: 'Active',
    lastDonationDate: '2023-08-31',
    totalDonated: 270.0,
    frequency: 'Monthly',
    paymentMethod: 'PayPal',
    notes: 'New donor who started after seeing our social media posts',
  },
  {
    name: 'Emily Chen',
    email: 'emily@example.com',
    startDate: '2019-03-01',
    monthlyDonation: 20.0,
    status: 'Active',
    lastDonationDate: '2023-09-30',
    totalDonated: 480.0,
    frequency: 'Monthly',
    paymentMethod: 'Check',
    notes: 'Regular supporter who increased donation amount in 2023',
  },
  {
    name: 'David Kim',
    email: 'david@example.com',
    startDate: '2023-02-15',
    monthlyDonation: 50.0,
    status: 'Active',
    lastDonationDate: '2023-12-31',
    totalDonated: 300.0,
    frequency: 'Monthly',
    paymentMethod: 'Credit Card',
    notes: 'Started donating after attending our fundraising event',
  },
  {
    name: 'Lisa Nguyen',
    email: 'lisa@example.com',
    startDate: '2018-04-01',
    monthlyDonation: 35.0,
    status: 'Active',
    lastDonationDate: '2023-11-30',
    totalDonated: 1050.0,
    frequency: 'Monthly',
    paymentMethod: 'Bank Transfer',
    notes:
      'Increased donation amount in 2023 due to successful fundraising campaign',
  },
  {
    name: 'Kevin White',
    email: 'kevin@example.com',
    startDate: '2022-08-20',
    monthlyDonation: 40.0,
    status: 'Active',
    lastDonationDate: '2023-09-15',
    totalDonated: 240.0,
    frequency: 'Monthly',
    paymentMethod: 'PayPal',
    notes: 'New donor who started after seeing our social media posts',
  },
  {
    name: 'Amy Martin',
    email: 'amy@example.com',
    startDate: '2017-05-01',
    monthlyDonation: 25.0,
    status: 'Active',
    lastDonationDate: '2023-10-31',
    totalDonated: 600.0,
    frequency: 'Monthly',
    paymentMethod: 'Check',
    notes: 'Regular supporter who increased donation amount in 2023',
  },
  {
    name: 'James Brown',
    email: 'james@example.com',
    startDate: '2023-03-15',
    monthlyDonation: 45.0,
    status: 'Active',
    lastDonationDate: '2023-12-31',
    totalDonated: 270.0,
    frequency: 'Monthly',
    paymentMethod: 'Credit Card',
    notes: 'Started donating after attending our fundraising event',
  },
  {
    name: 'Sarah Taylor',
    email: 'sarah@example.com',
    startDate: '2018-07-01',
    monthlyDonation: 30.0,
    status: 'Active',
    lastDonationDate: '2023-11-30',
    totalDonated: 900.0,
    frequency: 'Monthly',
    paymentMethod: 'Bank Transfer',
    notes:
      'Increased donation amount in 2023 due to successful fundraising campaign',
  },
  {
    name: 'Michael Johnson',
    email: 'michael@example.com',
    startDate: '2022-09-20',
    monthlyDonation: 35.0,
    status: 'Active',
    lastDonationDate: '2023-08-31',
    totalDonated: 210.0,
    frequency: 'Monthly',
    paymentMethod: 'PayPal',
    notes: 'New donor who started after seeing our social media posts',
  },
  {
    name: 'Emma Wilson',
    email: 'emma@example.com',
    startDate: '2017-03-01',
    monthlyDonation: 20.0,
    status: 'Active',
    lastDonationDate: '2023-10-31',
    totalDonated: 480.0,
    frequency: 'Monthly',
    paymentMethod: 'Check',
    notes: 'Regular supporter who increased donation amount in 2023',
  },
  {
    name: 'Christopher Lee',
    email: 'christopher@example.com',
    startDate: '2023-04-15',
    monthlyDonation: 40.0,
    status: 'Active',
    lastDonationDate: '2023-12-31',
    totalDonated: 280.0,
    frequency: 'Monthly',
    paymentMethod: 'Credit Card',
    notes: 'Started donating after attending our fundraising event',
  },
  {
    name: 'Olivia Martin',
    email: 'olivia@example.com',
    startDate: '2018-06-01',
    monthlyDonation: 25.0,
    status: 'Active',
    lastDonationDate: '2023-11-30',
    totalDonated: 750.0,
    frequency: 'Monthly',
    paymentMethod: 'Bank Transfer',
    notes:
      'Increased donation amount in 2023 due to successful fundraising campaign',
  },
  {
    name: 'William Davis',
    email: 'william@example.com',
    startDate: '2022-10-20',
    monthlyDonation: 30.0,
    status: 'Active',
    lastDonationDate: '2023-09-15',
    totalDonated: 180.0,
    frequency: 'Monthly',
    paymentMethod: 'PayPal',
    notes: 'New donor who started after seeing our social media posts',
  },
  {
    name: 'Isabella Rodriguez',
    email: 'isabella@example.com',
    startDate: '2017-04-01',
    monthlyDonation: 20.0,
    status: 'Active',
    lastDonationDate: '2023-10-31',
    totalDonated: 480.0,
    frequency: 'Monthly',
    paymentMethod: 'Check',
    notes: 'Regular supporter who increased donation amount in 2023',
  },
  {
    name: 'Alexander Thompson',
    email: 'alexander@example.com',
    startDate: '2023-05-15',
    monthlyDonation: 45.0,
    status: 'Active',
    lastDonationDate: '2023-12-31',
    totalDonated: 270.0,
    frequency: 'Monthly',
    paymentMethod: 'Credit Card',
    notes: 'Started donating after attending our fundraising event',
  },
  {
    name: 'Sophia Garcia',
    email: 'sophia@example.com',
    startDate: '2018-08-01',
    monthlyDonation: 35.0,
    status: 'Active',
    lastDonationDate: '2023-11-30',
    totalDonated: 1050.0,
    frequency: 'Monthly',
    paymentMethod: 'Bank Transfer',
    notes:
      'Increased donation amount in 2023 due to successful fundraising campaign',
  },
]
