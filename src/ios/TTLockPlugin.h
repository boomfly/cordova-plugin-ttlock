#import <Cordova/CDV.h>
#import <TTLock/TTLock.h>

@interface TTLockPlugin : CDVPlugin {

}

- (void)lock_setupBluetooth:(CDVInvokedUrlCommand *)command;
- (void)lock_isScanning:(CDVInvokedUrlCommand *)command;
- (void)lock_startScan:(CDVInvokedUrlCommand *)command;
- (void)lock_stopScan:(CDVInvokedUrlCommand *)command;
- (void)lock_init:(CDVInvokedUrlCommand *)command;
- (void)lock_reset:(CDVInvokedUrlCommand *)command;
- (void)lock_control:(CDVInvokedUrlCommand *)command;
- (void)lock_setTime:(CDVInvokedUrlCommand *)command;
- (void)lock_getTime:(CDVInvokedUrlCommand *)command;
- (void)lock_setRemoteUnlockSwitchState:(CDVInvokedUrlCommand *)command;
- (void)lock_getRemoteUnlockSwitchState:(CDVInvokedUrlCommand *)command;
- (void)lock_getOperationLog:(CDVInvokedUrlCommand *)command;

- (void)lock_addFingerprint:(CDVInvokedUrlCommand *)command;
- (void)lock_deleteFingerprint:(CDVInvokedUrlCommand *)command;
- (void)lock_getAllValidFingerprints:(CDVInvokedUrlCommand *)command;
- (void)lock_clearAllFingerprints:(CDVInvokedUrlCommand *)command;
- (void)lock_modifyFingerprintValidityPeriod:(CDVInvokedUrlCommand *)command;

- (void)gateway_getSSID:(CDVInvokedUrlCommand *)command;
- (void)gateway_connect:(CDVInvokedUrlCommand *)command;
- (void)gateway_disconnect:(CDVInvokedUrlCommand *)command;
- (void)gateway_init:(CDVInvokedUrlCommand *)command;
- (void)gateway_scanWiFi:(CDVInvokedUrlCommand *)command;
- (void)gateway_upgrade:(CDVInvokedUrlCommand *)command;

@end