export default ({ values, errors }) => {
  const rules = {
    name: value => {
      if(!(value.length > 2) || !(value.length < 60)){
        errors.name = 'Имя должно быть не меньше 2-х символов и не больше 60'
      }

    	if(!value){
      		errors.name = 'Нужно ввести имя'
	    }
    },

    email: value => {
	    if (!/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(value)) {
	      errors.email = 'Неправильный email адрес'
	    }

      if (!value) {
          errors.email = 'Нужно ввести email'
      } 
    },

    phone: value => {
    	if(!/^[\+]{0,1}380([0-9]{9})$/i.test(value)){
    		errors.phone ='Неправильный номер'
    	}

      if(!value){
        errors.phone = 'Нужно ввести номер телефона'
      }
    },

    photo: value => {
      if(!(value.type == 'image/jpeg' || value.type == 'image/jpg')){
        errors.photo = 'Фотография должна быть jpeg или jpg формата'
      }

      if(value.size/1024/1024 >= 5){
        errors.photo = 'Фотография не должна превышать размер 5 мб'
      }

      if(!value){
        errors.photo = 'Отсутствует фотография'
      }
    }
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};