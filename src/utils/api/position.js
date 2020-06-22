const APILINK = 'https://frontend-test-assignment-api.abz.agency/api/v1'

export default {
  getPositions: params => fetch(`${APILINK}/positions`)
		.then(response => response.json())
		.then(data => data.success ? data : getPositionError()),
};

function getPositionError(){
	throw new Error('Не удалось получить список вакансий')
}