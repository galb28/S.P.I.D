function LoadScript(arr, callback)
{
    function Load(script_src, callb) {
        var fileref = document.createElement('script');
        fileref.type = "text/javascript";
        fileref.src = "js/Library/"+script_src+".js";
        if(callback !== undefined) fileref.onload = callb;
        document.body.appendChild(fileref);
    }

    if(arr.constructor === Array) {

        var numLoaded = 0;

        for(var i in arr) {
            Load(arr[i], function() {
                numLoaded++;

                if(numLoaded == arr.length)
                {
                    callback();
                }
            });
        }
    }
    else {
        Load(arr, callback);
    }
}

if(!isMobile()) {
    LoadScript('Stacktrace', function() {

        // Create the debug function
        window.debug = function(msg, type) {

            // Create a string from the object
            msg = msg == undefined ? "NULL" :msg === Object(msg)  ? JSON.stringify(msg) : msg.toString();

            StackTrace.get().then(
                function(stack) {
                    console['debug'](
                        '\n%c' + Array(50).join('-') +
                        (window.frameElement ? ('\nDevice  : ' + (window.frameElement.id.split('-')[0] == 'iphone' ? 'iOS' : 'Android')) : '') +
                        '\nFile    : ' + stack[2 + (type == 'error' ? 1 : 0)].fileName.replace(/^.*[\\\/]/, '') +
                        '\nFunction: ' + stack[2 + (type == 'error' ? 1 : 0)].functionName +
                        '\nLine    : ' + stack[2 + (type == 'error' ? 1 : 0)].lineNumber +
                        '\nTime    : ' + new Date() +
                        '\nMesesage: %c' +
                        (msg.indexOf('\n') != -1 ? '\n\t' + msg.replace(/(?:\r\n|\r|\n)/g, '\n\t') : msg) +
                        '\n%c' + Array(50).join('-') + '\n',

                        'color:blue;',
                        (type == 'error' ? 'color: red' : 'color: green'),
                        'color: blue;'
                    );
                }
            );
        };
    });
}
else {
    window.debug = function(args){

        console.warn('Debug is disabled!');

    };
}
