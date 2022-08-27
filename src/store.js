import { writable } from 'svelte/store';


var count = writable(12);
var subject = writable([]);

export {count,subject} ;