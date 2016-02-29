
var Login = new Vue({

   // The page element id
   el: '#page_login',

   // Data variables
   data: {
		id: '',
		password: '',
		placeholder_text: 'ID',
		placeholder_text2: 'Password',
		id_class: '',
		password_class: ''
   },

   // Methods
   methods: {
   
   test_login: function() {
            App.SendRequest(
                'login',
                {
                    id: this.id,
                    password: this.password,
                },

                // Success
                function(response) {
                    if(response.success)
                    {
                       // Storage.set('token', response.token);
                        //alert('<div dir=ltr>Login token: <br />' + response.token);
                    //    this.get_data();
						this.change_page_main();
                    }
                    else {
						if('id' in response.errors)
						{
							this.placeholder_text ='ID NOT VALID';
							this.id_class = 'red';
							this.id='';
							this.password= '';
						}
						else{
							this.placeholder_text2 ='wrong Password';
							this.password_class = 'red';
							this.password= '';
						}
                    }

                }.bind(this),

                // Error
                function() {
                    alert('שליחת הבקשה לשרת נכשלה');
                }.bind(this)
            );
        },
   
   change_page_sign_up: function() {

            // Load pages/different.html
            App.LoadPage('sign_up');
            
        },

       // The main function
       onLoad: function() {
           debug('\'Login\' module initialized.');

           // Hide the loading animation
           App.HideLoadingAnimation();
       },
	   
	   submit_clicked: function() {
			
			if(!this.validate_id(this.id)){
				this.placeholder_text ='INVALID ID';
				this.id_class = 'red';
				this.id='';
				this.password= '';
				}
			else{
			this.id_class = 'blue';
			return this.test_login()
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
		}

   },
});

// Trigger the main function
Login.onLoad();
