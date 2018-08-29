var DB;
function CreateDataBase(name, version){
	version = version || '0.0'
	DB = openDatabase(name, version, 'Test DB', 200 * 1024 * 1024);
	return DB;
}

function CreateTable(name){
	ExeSql('CREATE TABLE IF NOT EXISTS '+name+' (id integer primary key autoincrement, namestr text, contact text)')
}

function ExeSql(sql, arg, callback){
	if(!DB){
		CreateDataBase('contactDB');
		CreateTable('Contacts');
	}
	if(!arg){arg = [];}
	if(!callback){callback = function(){}}
	
	var err_cb = function(tx, err){
		console.log("Error:"+err.message)
	}
	
	var succ_cb = function(tx, results){
		callback(tx,results)
	}
	
	DB.transaction(function (tx) {
		tx.executeSql(sql, arg, succ_cb, err_cb);
	})
}



/*
 * 插入数据
 */
function insertData(dataString,callback) {
	var sql = "INSERT INTO Contacts (namestr, contact) VALUES ('contact', '" + dataString + "')";
	ExeSql(sql, [], callback)
}

/*
 * 取出全部数据
 */
function queryData(callback) {
	var sql = "select * from Contacts";
	ExeSql(sql, [], callback)
}

/*
 * 删除全部数据
 */
function deleteData(callback) {
	var sql = "delete from Contacts";
	ExeSql(sql, [], callback)
}