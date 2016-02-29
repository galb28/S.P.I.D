/**
 * @author Eyal Godovich <eyal@godovich.com>
 */

// Override alert
window.alert = function(msg, title) {
    phonon.alert(msg, title == undefined ? "הודעה" : title, false, "אישור");
};

// Create the error function
window.error = function(msg) {
    window.debug(msg, 'error');
};

String.prototype.hexEncode = function(){
    var hex, i;

    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
};

String.prototype.hexDecode = function(){
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
};
