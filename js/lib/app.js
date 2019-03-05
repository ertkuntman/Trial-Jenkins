/*
 * @owner yianni.ververis@qlik.com
 *
 */
var me = {
	v: '1.0.7',
	obj: {
		qlik: null,
		app: null,
		angularApp: null,
		isFirstLoad: null,
		// userName: null,
		userCompany: null,
		// lastReload: null,
		// salesDataAsOf: null,
		model: [],
		id: [],
		name: [],
		getObjectModel: {},
		YYYYMM: null
	}
};

me.init = function () {
	me.config = {};
	me.vars = {};
}

me.boot = function () {
	me.init();
	app.obj.isFirstLoad = true;
 	//me.authenticateUser().then(me.getUserID).then(me.openAppFunction).then(me.applyTriggers);
};

app = me;
