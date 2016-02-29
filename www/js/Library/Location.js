/**
 * @author Eyal Godovich <eyal@godovich.com>
 */

function getCurrentLocation(onSuccess, onError)
{

    if(getDeviceType() == "Web") {
        getData();
    }
    else {
        CheckGPS.check(
            function() {
                getData();
            },

            function() {
                onError('GPS_DISABLED');
            }
        );
    }

    // Get coordinates
    function getData() {
        navigator.geolocation.getCurrentPosition(onSuccess, function(code) {
            onError(code.message == 'User denied Geolocation' ? 'DENIED_ACCESS' : 'UNKNOWN');
        }, { maximumAge: 0, timeout: 10000 });
    }
}
