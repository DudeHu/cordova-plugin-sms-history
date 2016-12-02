/**
 * Created by hyq on 2016/12/2.
 */
function ReadSms() {
}

ReadSms.prototype.getMessages = function (phoneNumber,numberOfTextsToRead, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "ReadSms", "GetTexts", [phoneNumber, numberOfTextsToRead]);
};

ReadSms.prototype.getMessagesFromTime = function (phoneNumber,timeStamp, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "ReadSms", "GetTextsAfter", [phoneNumber, timeStamp]);
};

ReadSms.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }

    window.plugins.readsms = new ReadSms();
    return window.plugins.readsms;
};

cordova.addConstructor(ReadSms.install);