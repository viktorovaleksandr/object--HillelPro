// Написать две функции:
// 1) выведет список студентов и средний бал каждого
// 2) выведен средний бал по всем студентам

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

function averageMarks(arg) {
	return arg.marks.reduce((acc, item) => acc + item,0) / arg.marks.length;
}

function averageMarkGroup() {
	const sumMaks = students.reduce((acc, item) => acc + averageMarks(item),0);
	const average = Math.round(sumMaks / students.length);
	return average;
}

function showResults(arg) {
	for (const key of arg) {
		console.log(`Student:${key.name} \nAverage mark:${averageMarks(key)}`);
   	console.log(`Average mark group: ${averageMarkGroup(key)}`);
	}	
}

showResults(students);

