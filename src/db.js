
import {Dexie} from 'dexie';

      export var db = new Dexie('myDatabase');
       db.version(1).stores({friends: '++id, name, age'});

        export var db5 = new Dexie('myDatabase');
        db5.version(1).stores({vat: '++id, nubs'});
