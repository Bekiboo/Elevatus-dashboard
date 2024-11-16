# Overview

I developped this project to learn React and Next.js. This project is a simple dashboard for the Elevatus non-profit organization. It displays the lists of donors, employees and children receiving help, as well as details for each of them.
Use the following commands to run the project:

`pnpm install`

`pnpm run dev`

then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[Demo Video](https://youtu.be/WzYs_APPgFI)

# Web Pages

- Home Page: This page displays the total number of donors, employees and children, a description of the organization and its mission statement.
- Donors Page: This page displays the list of donors and their details. You can click on a donor to view their details.
- Employees Page: This page displays the list of employees and their details. You can click on an employee to view their details.
- Children Page: This page displays the list of children and their details. You can click on a child to view their details.

# Cloud Database

I used **MongoDB Atlas** as the cloud database for this project. It stores information about donors, children, and employees, with structured relationships for efficient data management.

## Database Structure

### **Donors Collection**

- **Fields**: `name`, `email`, `startDate`, `monthlyDonation`, `status`, `lastDonationDate`, `totalDonated`, `frequency`, `paymentMethod`, `notes`.
- **Relationships**: Includes a list of sponsored children (`children`), referencing the `Children` collection.

### **Children Collection**

- **Fields**: `firstName`, `lastName`, `birthdate`, `enrollmentDate`, `gradeLevel`, `healthStatus`, `guardianName`, `guardianContact`, `address`, `comments`, `lastCheckupDate`.
- **Relationships**: Each child links to a sponsoring donor (`donor`).

### **Employees Collection**

- **Fields**: `name`, `email`, `role`, `hireDate`, `status`, `notes`.

# Development Environment

I used Visual Studio Code to develop this project. I used TypeScript, Next 14 and React 18, as well as Tailwind CSS.

# Useful Websites

- [React Documentation](https://react.dev/learn)
- [Next Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)

# Future Work

- Search functionality.
- Filter functionality.
- Add more details for donors, employees and children.
