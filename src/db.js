
import {Dexie} from 'dexie';

      export var db = new Dexie('myDatabase');
       db.version(1).stores({friends: '++id, name, age'});