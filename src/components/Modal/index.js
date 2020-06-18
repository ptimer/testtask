import React from 'react'
import propTypes from 'prop-types'
import './Modal.scss'
import Modal from 'react-modal'
import {Button} from '../'
import closeIcon from '../../assets/img/close.svg'

const ModalComponent = ({visible, close}) => (
		<div>
	        <Modal
	          isOpen={visible}
	          onRequestClose={close}
	          className={'modal'}
	          contentLabel="Example Modal"
	          overlayClassName="Overlay"
	        >
				<div className='modal__top'>
					<div className='modal__title'>
						<span>Congratulations</span>
					</div>
					<div className='modal__close'>
						<img src={closeIcon} alt="" onClick={close}/>
					</div>
				</div>

				<div className='modal__center'>
					<span>You have successfully passed the registration</span>
				</div>

				<div className='modal__bottom'>
					<Button className={'modal__close_button'} onClick={close}>Great</Button>
				</div>
	        </Modal>
	    </div>
)

ModalComponent.propTypes = {
	visible: propTypes.bool,
	close: propTypes.func,
}

export default ModalComponent