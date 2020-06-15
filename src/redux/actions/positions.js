import { positionApi } from '../../utils/api'

const Actions = {
	getPositions: _ => () => {
	 	return positionApi.getPositions()
	},
}

export default Actions