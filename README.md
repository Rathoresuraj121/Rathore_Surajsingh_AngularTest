# Rathore_Surajsingh_AngularTest

An Angular application demonstrating employee management with CRUD operations, routing, and reactive forms.

## 📋 Project Overview

This project is a comprehensive Angular application that showcases:
- **Components and Data Binding**: Dynamic UI components with two-way data binding
- **Forms and Validation**: Reactive forms with built-in validation rules
- **Routing**: Multiple routes for list, add, and edit operations
- **Reusable Services**: Shared service for CRUD operations
- **Filtering & Sorting**: Search by name/department and sort by salary
- **UI Styling**: Angular Material for modern, responsive design

## 🚀 Angular Version

**Angular 20.2.0**

## 📦 Technologies Used

- **Angular**: 20.2.0
- **Angular Material**: 20.2.10
- **Angular CDK**: 20.2.10
- **RxJS**: 7.8.0
- **TypeScript**: 5.9.2
- **Angular Router**: For navigation
- **Reactive Forms**: For form handling and validation

## ✨ Features Implemented

### Core Features
- ✅ Display employee data in a responsive Material table
- ✅ Search functionality (filter by name or department)
- ✅ Sort by salary (ascending/descending)
- ✅ Add new employee with form validation
- ✅ Edit existing employee details
- ✅ Delete employee with confirmation
- ✅ Reactive Forms with validation rules

### Bonus Features
- ✅ Angular Routing (`/list`, `/add`, `/edit/:id`)
- ✅ Shared EmployeeService for CRUD operations
- ✅ Toast/Snackbar notifications for user actions
- ✅ Responsive design with Angular Material
- ✅ Form validation with error messages

## 📊 Data Source

The application uses a static array of employee data:

```typescript
export const EMPLOYEES = [
  { id: 1, name: 'Amit Sharma', department: 'HR', salary: 35000 },
  { id: 2, name: 'Neha Patel', department: 'Finance', salary: 42000 },
  { id: 3, name: 'Raj Verma', department: 'IT', salary: 55000 },
  { id: 4, name: 'Priya Mehta', department: 'Admin', salary: 30000 },
  { id: 5, name: 'Vikas Gupta', department: 'IT', salary: 60000 },
];
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI

### Steps to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rathoresuraj121/Rathore_Surajsingh_AngularTest.git
   cd Rathore_Surajsingh_AngularTest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200/`


## 🎯 Application Routes

- `/` or `/list` - Employee list with search and sort
- `/add` - Add new employee form
- `/edit/:id` - Edit existing employee form

## 🔍 Key Functionalities

### 1. Employee List
- Displays all employees in a Material table
- Real-time search by name or department
- Sort by salary (toggle ascending/descending)
- Action buttons for Edit and Delete

### 2. Add Employee
- Reactive form with validation
- Required fields: Name, Department, Salary
- Minimum salary validation (> 0)
- Success notification on add

### 3. Edit Employee
- Pre-populated form with existing data
- Same validation rules as Add
- Updates employee in-memory
- Success notification on update

### 4. Delete Employee
- Confirmation dialog before deletion
- Removes employee from list
- Success notification on delete

## ✅ Form Validations

- **Name**: Required, minimum 2 characters
- **Department**: Required
- **Salary**: Required, must be a positive number

## 🎨 UI/UX Features

- Material Design components
- Responsive layout (mobile-friendly)
- Loading states and error handling
- Snackbar notifications for user feedback
- Clean and intuitive interface


## 📦 Build

Build the project for production:
```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 👨‍💻 Author

**Surajsingh Rathore**

## 📝 License

This project is created as a technical assessment and is open for review.

---

**Note**: This application uses in-memory data storage. All changes will be lost on page refresh.
