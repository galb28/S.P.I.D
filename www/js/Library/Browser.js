/**
 * @author Eyal Godovich <eyal@godovich.com>
 */

function getDeviceType()
{
    return (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("iPod") > 0) ? "iOS" : (navigator.userAgent.indexOf("Android")  > 0) ? "Android" : "Web";
}

function isMobile()
{
    return ('cordova' in window);
}
