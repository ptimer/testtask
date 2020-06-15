export default values => {
	let dataToPost = JSON.parse(JSON.stringify(values, null, 2))
    let formData = new FormData()
    formData.append('position_id', dataToPost.position_id)
    formData.append('name', dataToPost.name)
    formData.append('email', dataToPost.email)
    formData.append('phone', dataToPost.phone)
    formData.append('photo', values.file)

    return formData;
}