// THIS IS AN EXAMPLE.

var Different = new Vue({
    el: '#page_different',

    data: {

        // Data here
        msg: 'הצג מיקום'

    },

    methods: {

        // Methods here
        show_alert: function() {
            alert('HEY THERE');
        },

        onLoad: function() {
            debug('\'Different\' module initialized.');

            // Hide the loading animation
            App.HideLoadingAnimation();
        }

    }
});

Different.onLoad();
