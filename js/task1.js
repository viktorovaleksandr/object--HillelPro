const students = [
    {
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
    },
    {
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
    },
    {
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
    }
]	

function averageMarks(students) {
	return students.marks.reduce((acc, item) => acc + item,0) / students.marks.length;
}

function averageMarkGroup(students) {
	const sumMaks = students.reduce((acc, item) => acc + averageMarks(item),0);
	const average = Math.round(sumMaks / students.length);
	return average;
}

function showResults(students) {
	for (const student of students) {
	 console.log(`${student.name} \nAverage mark: ${averageMarks(student)}`);
	}	
  console.log(`Average mark group: ${averageMarkGroup(students)}`);
}
showResults(students);

