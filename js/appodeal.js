document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {  
var appKey = "95d08223e373acaa5a2dc2295cdc5076e9c50d3f312ecac9";
            Appodeal.disableLocationPermissionCheck();
            Appodeal.confirm(Appodeal.SKIPPABLE_VIDEO);
            Appodeal.initialize(appKey, Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.BANNER | Appodeal.REWARDED_VIDEO | Appodeal.NON_SKIPPABLE_VIDEO);

}
