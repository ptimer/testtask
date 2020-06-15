export const utils = {
	sortUsersByRegistration: obj => obj.sort((a, b) => b.registration_timestamp - a.registration_timestamp),
}