try {
	var gmc = require('./lib/GMC');

	/**
	 * 银行卡测试
	 */
	var params = {
		trans_type: '16',
		pos_id: '12345678',
		oper_id: '23456789',
		trans_id: '05',
		// amount: '0.01',
		// old_date: '20171110',
		// old_reference: '111111111111',
		// old_trace: '000012',
		// lrc: '000',
		// memo: ''
	};

	/**
	 * B扫C测试
	 */
	// var params = {
	// 	trans_type: '16',
	// 	pos_id: '12345678',
	// 	oper_id: '23456789',
	// 	trans_id: '01',
	// 	amount: '0.01',
	// 	old_date: '20171110',
	// 	old_reference: '111111111111',
	// 	old_trace: '010013',
	// 	lrc: '000',
	// 	memo: '134813436751995750'
	// };

	gmc.bankall(params, function (data) {
		console.info(data);
	}, function (error) {
		console.log('错误代码：' + error.code);
		console.log('错误消息：' + error.message);
	});

	/**
	 * C扫B测试
	 */
	// var params = {
	// 	"gProduct": "1",
	// 	"gPlatform": "1",
	// 	"gEnv": "1",
	// 	"gVersion": "1.0.0",
	// 	"actCode": "3911",
	// 	"reqTime": "2017-11-15 15:40:22",
	// 	"mcCode": "225",
	// 	"tranTime": "2017-11-15 15:40:22",
	// 	"billNo": "3064201710112909507031419656",
	// 	"totalAmount": "1",
	// 	"msgId": "703140955123456",
	// 	"regID": "RegID",
	// 	"memberId": "VipNo",
	// 	"counterNo": "CounterNo",
	// 	"notifyUrl": "http://222.240.182.134:8899/repeatplat/repeat/testPayCallBack",
	// 	"returnUrl": "https://www.baidu.com/s?a=1",
	// 	"mid": "123456789900080",
	// 	"tid": "12345080"
	// };

	// /**
	//  * C扫B订单状态查询测试
	//  */
	// var params = {
	// 	"gProduct": "1",
	// 	"gPlatform": "1",
	// 	"gEnv": "1",
	// 	"gVersion": "1.0.0",
	// 	"actCode": "3913",
	// 	"reqTime": "2017-11-15 15:40:22",
	// 	"mcCode": "225",
	// 	"tranTime": "2017-11-15 15:40:22",
	// 	"billNo": "3064201710112909507031419656",
	// 	"mid": "123456789900080",
	// 	"tid": "12345080"
	// };

	// var pay_config = {
	//     url: 'http://222.240.182.134:8899/repeatplat/repeat/api',
	//     key: 'XzEJmzNSpaAPe8eNCkS56eypRSSp4fjxWbkQKAz73cJn8cZA'
	// };

	// gmc.qrcode(pay_config, params, function (data) {
	// 	console.info(data);
	// }, function (error) {
	// 	console.log('错误代码：' + error.code);
	// 	console.log('错误消息：' + error.message);
	// });
} catch (error) {
	console.info(error);
}
process.on('uncaughtException', function (error) {
	console.log(error);
});

process.stdin.resume();