var Main = new Vue({
    el: '#page_main',
    data: {
        message: 'JS נטען בהצלחה'
    },

    methods: {

        change_page_example: function() {

            // Load pages/different.html
            App.LoadPage('different');

        },

        change_progress: function() {
            this.update_progress(Math.random()*80 + 20);
        },

        test_login: function() {
            App.SendRequest(
                'login',
                {
                    id: 315116707,
                    password: 'test123'
                },

                // Success
                function(response) {
                    if(response.success)
                    {
                        Storage.set('token', response.token);
                        alert('<div dir=ltr>Login token: <br />' + response.token);
                        this.get_data();
                    }
                    else {
                        alert('Wrong password');
                    }

                }.bind(this),

                // Error
                function() {
                    alert('שליחת הבקשה לשרת נכשלה');
                }.bind(this)
            );
        },

        get_data: function() {
            App.SendRequest(
                'check',

                {
                    token: Storage.get('token').toString()
                },

                function(response) {
                        alert("<div dir=ltr>" + JSON.stringify(response));
                }.bind(this),

                function() {
                    alert('ERROR')
                }
            );
        },

        update_progress: function(precent) {
            var element = document.getElementById('circle');
            precent = precent < 0 ? 0 : (precent > 100 ? 100 : precent);
            var val = parseInt(window.getComputedStyle(element)['stroke-dasharray'].slice(0, -1));
            var calc = val * (1 - (precent / 100));
            element.style['stroke-dashoffset'] = calc + 'px';
            document.getElementById('counter_text').innerHTML = (Math.round(precent / 100 * 60)) + ' שעות';
        },

        onLoad: function() {
            debug('\'Main\' module initialized.');

            // Hide the loading animation
            App.HideLoadingAnimation();
        }

    }
});

// Trigger the main function
Main.onLoad();
