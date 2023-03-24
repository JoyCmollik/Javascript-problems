const getLineName = (person) => {
	const { age, temperature } = person;

	if (age >= 20 && age <= 30 && temperature < 100) {
		// person with age 20-30 with temperature less than 100
		return 'A';
	} else if (age >= 31 && age <= 40 && temperature < 100) {
		// person with age 31-40 with temperature less than 100
		return 'B';
	} else if (age >= 41 && age <= 50 && temperature < 100) {
		// person with age 41-50 with temperature less than 100
		return 'C';
	} else if (temperature >= 100) {
		// any range of age with temperature greater than equal 100
		return 'D';
	}
	return null;
};

const vaxTrail = (people) => {
	const result = {
		A: [],
		B: [],
		C: [],
		D: [],
	};

	people.forEach((person) => {
		const listName = getLineName(person);

		if (listName !== null) {
			person.age % 2 === 0
				? result[listName].unshift(person)
				: result[listName].push(person); // each array is sorted by even ages people
		}
	});

	console.log(result);
};

vaxTrail([
	{ name: 'sunil', age: 21, temperature: 98 },
	{ name: 'Biplap', age: 22, temperature: 98 },
	{ name: 'Kabir', age: 36, temperature: 99 },
	{ name: 'Rahul', age: 37, temperature: 99 },
	{ name: 'Paul', age: 42, temperature: 98 },
	{ name: 'Kat', age: 41, temperature: 98 },
	{ name: 'Nayem', age: 50, temperature: 100 },
	{ name: 'Sabnaj', age: 51, temperature: 101 },
]);
