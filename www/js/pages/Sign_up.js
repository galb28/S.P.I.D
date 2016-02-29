
var Sign_up = new Vue({

   // The page element id
   el: '#page_sign_up',

   // Data variables
   data: {
	email_class: '',
	email: '',
	placeholder_text: 'email',
	id: '',
	id_class: '',
	placeholder_text2: 'id',
	password: '',
	password_class: '',
	placeholder_text3: 'password',
	password2: '',
	placeholder_text4: 'renter password',
	firstname: '',
	lastname: ''
   },

   // Methods
   methods: {

       // The main function
       onLoad: function() {
           debug('\'Sign_up\' module initialized.');

           // Hide the loading animation
           App.HideLoadingAnimation();
		   
       },
	   submit_clicked: function() {
		   
		   if(!this.validate_email(this.email))
		   {
			   this.email = '';
			   this.email_class = 'red';
			   this.placeholder_text = 'invalid email';
		   }
		   else if(!this.validate_id(this.id)){
			   this.id = '';
			   this.id_class = 'red';
			   this.placeholder_text2 = 'invalid id';
		   }
		   else if(this.password != this.password2){
			   this.password = '';
			   this.password2 = '';
			   this.password_class = 'red';
			   this.placeholder_text4 = 'passwords do not match';
		   }
		   else{
			   alert("name: " + this.firstname + " " + this.lastname + "<br />" + "email: " + this.email + "<br />" + "id: " + this.id + "<br />" + "password: " + this.password);
		   }
		   
	   },
	    validate_id: function (id) {
			if(id == 0)
			{
				return false; 
			}
			else{
			var sum = 0;
			for(var flip = true; id > 0; sum += [[0,2,4,6,8,1,3,5,7,9],[0,1,2,3,4,5,6,7,8,9]][flip == true ? 1 : 0][id % 10], flip = !flip, id = Math.floor(id / 10));
			return sum % 10 === 0;
			}
		},
		
	   validate_email: function (email) {
		   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		   return re.test(email);
	   }

   },
});

// Trigger the main function
Sign_up.onLoad();
