import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Modal as ModalComponent} from '../components'

const Modal = ({registered}) => {

	return <ModalComponent visible={registered}/>
}

export default connect(
	({ registered }) => ({registered}),
)(Modal)