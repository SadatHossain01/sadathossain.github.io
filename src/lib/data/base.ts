const firstName = 'Mohammad Sadat';
const lastName = 'Hossain';
const suffix = 'Sadat Hossain';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
