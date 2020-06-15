export default ({ values, errors }) => {
  const rules = {
    name: value => {
    	if(!value){
      		errors.name = "Нужно ввести имя"
	    }

	    if(!(value.length > 2) || !(value.length < 60)){
	    	errors.name = "Имя должно быть не меньше 2-х символов и не больше 60"
	    }
    },

    email: value => {
    	if (!value) {
      	  errors.email = 'Нужно ввести email'
	    } 

	    if (!/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(value)) {
	      errors.email = 'Неправильный email адрес'
	    }
    },

    phone: value => {
    	if(!value){
    		errors.phone = "Нужно ввести номер телефона"
    	}

    	if(!/^[\+]{0,1}380([0-9]{9})$/i.test(value)){
    		errors.phone ="Неправильный номер"
    	}
    }
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};