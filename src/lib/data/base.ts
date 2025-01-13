const firstName = 'Sadat';
const lastName = 'Hossain';
const fullName = 'Mohammad Sadat Hossain';
const suffix = 'Sadat Hossain';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return fullName;
	}
};

export default BaseData;
