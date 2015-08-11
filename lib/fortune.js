exports.getFortune = function () {
    var pinLenght = 5;
    var pinComponents = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ0123456789";
    var idx;
    var pin = "";
    for (var i = 0; i < pinLenght; i++) {
        idx = Math.floor(Math.random() * pinComponents.length);
        pin = pin + pinComponents[idx];
    }
    return pin;
};