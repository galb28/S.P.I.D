/**
 * @author Eyal Godovich <eyal@godovich.com>
 */

var Storage = {

    exists: function(key) {
        return AES.hash(key) in localStorage;
    },

    get: function(key) {

        if(!Storage.exists(key))
        {
            debug(String.format('Storage: \'{0}\' doesn\'t exist!'));
            return;
        }

        debug(String.format('Storage: Get \'{0}\'', key));

        var obj = JSON.parse(AES.decrypt(localStorage.getItem(AES.hash(key))));

        if(obj.constructor === String)
        {
            return obj.toString();
        }

        return AES.decrypt(obj);
    },

    set: function(key, value) {
        debug(String.format('Storage: Set \'{0}\'', key));
        value = AES.encrypt(JSON.stringify(value));
        localStorage.setItem(AES.hash(key), value);
    }

};
