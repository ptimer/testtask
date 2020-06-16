import React, {Fragment} from 'react'
import propTypes from 'prop-types'
import './Modal.scss'
import {Button} from '../'

const Modal = ({visible, showModal}) => (
	<Fragment>
		{visible && <div className="modal">
				<Button onClick={showModal}>Great</Button>
			</div>
		}
	</Fragment>
)

Modal.propTypes = {
	visible: propTypes.bool,
	showModal: propTypes.func,
}

export default Modal