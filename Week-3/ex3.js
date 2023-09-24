function createIncrement() {
  let count = 0;
  
  function increment() { 
    count++; 
  } 

  let message = `Count is ${count}`; 
  function log() { 
    console.log(message); 
  } 
  return [increment, log]; 
} 

const [increment, log] = createIncrement(); 

increment(); 
increment(); 
increment(); 
log();// What is logged?

/**
 * It would log "Count is 0", as when we call 'createIncrement' function message string will be created, so when we 
 * call increment count is definetly increasing but message is not changing. so it shold print "Count is 0".
 */