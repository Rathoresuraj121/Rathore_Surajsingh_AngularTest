export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export enum EmployeeTableColumn {
  ID = 'id',
  NAME = 'name',
  DEPARTMENT = 'department',
  SALARY = 'salary',
  ACTIONS = 'actions',
}

export enum Department {
  HR = 'HR',
  FINANCE = 'Finance',
  IT = 'IT',
  ADMIN = 'Admin',
  MARKETING = 'Marketing',
  SALES = 'Sales',
}

export const EMPLOYEE_TABLE_COLUMNS: string[] = [
  EmployeeTableColumn.NAME,
  EmployeeTableColumn.DEPARTMENT,
  EmployeeTableColumn.SALARY,
  EmployeeTableColumn.ACTIONS,
];

export const DEPARTMENTS: string[] = [
  Department.HR,
  Department.FINANCE,
  Department.IT,
  Department.ADMIN,
  Department.MARKETING,
  Department.SALES,
];

export const VALIDATION_RULES = {
  NAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 50,
  },
  SALARY: {
    MIN: 10000,
    MAX: 1000000,
  },
};

export const NOTIFICATION_MESSAGES = {
  EMPLOYEE_ADDED: 'Employee added successfully',
  EMPLOYEE_UPDATED: 'Employee updated successfully',
  EMPLOYEE_DELETED: 'Employee deleted successfully',
  EMPLOYEE_NOT_FOUND: 'Employee not found',
};

export const DIALOG_MESSAGES = {
  DELETE_TITLE: 'Confirm Delete',
  DELETE_MESSAGE: 'Are you sure you want to delete this employee? This action cannot be undone.',
  DELETE_CONFIRM: 'Delete',
  DELETE_CANCEL: 'Cancel',
};

export const NOTIFICATION_DURATION = {
  SUCCESS: 3000,
  ERROR: 5000,
};

export const ROUTES = {
  LIST: '/list',
  ADD: '/add',
  EDIT: '/edit',
};

export const PLACEHOLDERS = {
  SEARCH: 'Search...',
  NAME: 'Enter employee name',
  DEPARTMENT: 'Select department',
  SALARY: 'Enter salary amount',
};

export const LABELS = {
  SEARCH: 'Search by Name or Department',
  NAME: 'Name',
  DEPARTMENT: 'Department',
  SALARY: 'Salary (₹)',
  ID: 'ID',
  ACTIONS: 'Actions',
};

export const BUTTON_TEXT = {
  ADD_EMPLOYEE: 'Add Employee',
  UPDATE: 'Update',
  ADD: 'Add',
  CANCEL: 'Cancel',
  CLOSE: 'Close',
};

export const TOOLTIPS = {
  EDIT: 'Edit',
  DELETE: 'Delete',
};
