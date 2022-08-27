        var db = new Dexie('myDatabase');
		db.version(1).stores({friends: '++id, name, age'});


		var db2 = new Dexie("enemy");
        db2.version(1).stores({enemy: '++id, name, age'});