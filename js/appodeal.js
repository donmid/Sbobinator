document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {  
var appKey = "ce651cc71181061772443c14163325ec397e6e928243ffc8";
            Appodeal.disableLocationPermissionCheck();
            Appodeal.confirm(Appodeal.SKIPPABLE_VIDEO);
            Appodeal.initialize(appKey, Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.BANNER);

}
