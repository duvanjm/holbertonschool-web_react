interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: "Steve", lastName: "Gates", age: 23, location: "SF" };
const student2: Student = { firstName: "Bill", lastName: "Jobs", age: 32, location: "SF" };

const studentsList: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
const tBody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
	const newRow: HTMLTableRowElement = tBody.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})

document.body.appendChild(table);
