import React, {Fragment} from 'react'
import propTypes from 'prop-types'
import './Modal.scss'
import {Button} from '../'

const Modal = ({visible, close}) => (
	<Fragment>
		{visible && <div className="modal">
				<Button onClick={close}>Great</Button>
			</div>
		}
	</Fragment>
)

Modal.propTypes = {
	visible: propTypes.bool,
	close: propTypes.func,
}

export default Modal