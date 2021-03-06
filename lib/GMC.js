var addon = require('../bin/GMC.node');
var utils = require('./utils');

exports.bankall = function (params, realCallback, errorCallback) {
    var request = utils.paramsToRequest(params);
    return addon.bankall(new Buffer(request), function (response) {
        var result = utils.responseToParams(response);
        if (result.res_code == '00') {
            if (realCallback) realCallback(result);
        } else {
            if (errorCallback) errorCallback({
                code: result.res_code,
                message: result.res_message
            });
        }
    }, function (error) {
        if (errorCallback) {
            if (error == '404') {
                errorCallback({
                    code: '404',
                    message: '未找到支付接口动态库'
                });
            } else if (error == '500') {
                errorCallback({
                    code: '500',
                    message: '初始化支付接口函数失败'
                });
            } else if (error == '501') {
                errorCallback({
                    code: '501',
                    message: '调用支付接口函数失败'
                });
            }
        }
    });
};

exports.qrcode = function (pay_config, params, realCallback, errorCallback) {
    params = utils.buildRequestPara(params, pay_config.key);
    utils.getHttpResponsePOST(pay_config, params, realCallback);
}