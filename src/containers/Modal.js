import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Modal as ModalComponent} from '../components'

const Modal = ({registered}) => {
	const [visible, setVisible] = useState(false)

	useEffect(_ => {
		if(registered){
			setVisible(true)
		}
	})

	const close = _ => {
		setVisible(false)
	}

	return <ModalComponent close={close} visible={visible}/>
}

export default connect(
	({ registered }) => ({registered}),
)(Modal)