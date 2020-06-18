import React, {useState, useEffect, Fragment} from 'react'
import {Header, SideDrawer, Backdrop} from '../components'

export default _ => {
	const [open, setOpen] = useState(true)

	return (
		<Fragment>
			<Header drawerHandler={_ => setOpen(prev => !prev)}/>
			<SideDrawer visible={open}/>
			{open ? <Backdrop onClick={_ => setOpen(false)}/> : null}
		</Fragment>
	)
}