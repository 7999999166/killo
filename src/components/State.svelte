<script>

import { db, db5 } from "../db.js"; 
import {subject,count} from "../store.js";
var daty ;
async function tulla(){  daty = await db.friends.toArray();
                        $subject = daty ;
                        console.log($subject);    
                      }

 tulla().catch(err => { console.log(err);});

 var maty ;
 async function lulla(){  maty = await db5.vat.toArray();
                          $count = maty ;
                          console.log($count);
                       }

lulla().catch(err => { console.log(err);});


</script>

<div>
   
</div>

<style>
   
</style>