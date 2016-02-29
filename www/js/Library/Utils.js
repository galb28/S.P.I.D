Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

if(window.frameElement)
{
    navigator.app = {};
    navigator.app.exitApp = function() {
        debug('Application is closing.\nYou\'re currently in development mode so the app won\'t close.');
    };
}
