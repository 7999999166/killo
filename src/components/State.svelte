<script>

import { db } from "../db.js"; 
import {subject} from "../store.js";
var daty ;
async function tulla(){  daty = await db.friends.toArray();
                        $subject = daty ;
                        console.log($subject);    
                      }

 tulla().catch(err => { console.log(err);});


</script>

<div>
   
</div>

<style>
   
</style>