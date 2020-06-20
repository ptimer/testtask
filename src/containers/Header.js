import React, {useState, useEffect, Fragment} from 'react'
import {Header, SideDrawer, Backdrop} from '../components'

export default _ => {
	const [open, setOpen] = useState(false)
	/* Убираем прокрутку страницы при открытии меню. 
	   overflow-y не поддерживается в сафари */
	if(open){
		document.body.style.overflow = 'hidden'
	}else{
		document.body.style.overflow = 'visible'
	}

	return (
		<Fragment>
			{/* Если кликаем значок меню в мобильной версии,
			то появляется боковое меню (SideDrawer) и прозрачный фон (Backdrop)*/}
			<Header drawerHandler={_ => setOpen(prev => !prev)}/>
			<SideDrawer visible={open} linkClicked={_ => setOpen(false)} />
			{open ? <Backdrop onClick={_ => setOpen(false)}/> : null}
		</Fragment>
	)
}