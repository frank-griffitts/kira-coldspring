// Revised 4/30/2025 10:48 AM - Fixed scoping and startup logic

document.addEventListener('deviceready', onDeviceReady, false);

let clickCount = 0;
let adsRemoved = false;

function onDeviceReady() {
    console.log('Device is ready');

    // Check localStorage for IAP flag
    adsRemoved = localStorage.getItem('adsRemoved') === 'true';

    // ✅ Initialize AdMob+ Interstitial Ads
    if (!adsRemoved && typeof admob !== 'undefined' && admob.interstitial) {
        console.log("Initializing AdMob+ interstitial...");

        admob.interstitial.load({
            adUnitId: 'ca-app-pub-4755343976921278/4951222543', // Replace with your actual interstitial unit ID
        }).then(() => {
            console.log("AdMob+ interstitial loaded.");
        }).catch(err => {
            console.error("Failed to load AdMob+ interstitial:", err);
        });
    }

    document.addEventListener('click', function () {
        if (adsRemoved || typeof admob === 'undefined' || !admob.interstitial) return;

        clickCount++;
        console.log("Click count:", clickCount);

        if (clickCount >= 3) {
            admob.interstitial.show().catch(err => {
                console.error("AdMob+ show failed:", err);
            });

            admob.interstitial.load({
                adUnitId: 'ca-app-pub-4755343976921278/4951222543'
            }).catch(err => {
                console.error("Reload interstitial failed:", err);
            });

            clickCount = 0;
        }
    });

    // ✅ In-App Purchase Setup
    if (typeof store !== 'undefined') {
        store.register({
            id: 'remove_ads',
            type: store.NON_CONSUMABLE
        });

        store.when('remove_ads').approved(function (product) {
            product.finish();
            localStorage.setItem('adsRemoved', 'true');
            adsRemoved = true;
            alert('Ads removed successfully!');
        });

        store.ready(function () {
            console.log('Store ready');
        });

        store.refresh();
    } else {
        console.warn('Store plugin not available');
    }

    // ✅ Manual purchase trigger (called from UI button)
    window.buyRemoveAds = function () {
        if (typeof store !== 'undefined') {
            console.log("Initiating purchase: remove_ads");
            store.order('remove_ads');
        } else {
            alert('Store not available');
        }
    };
}
