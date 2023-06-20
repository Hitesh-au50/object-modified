let school ={
  class : "34",
  teacher : "40",
  students : "20000"
}
var school_updated = Object.assign(school);
console.log(`original value:--`)
console.log (school);  
console.log (school_updated); 
console.log ("-------------------");

school.students = "30000"
console.log(`modified values:--`)
console.log(school)   
console.log(school_updated);

/*
original value:--
school={ class: '34', teacher: '40', students: '20000' }
school_updated={ class: '34', teacher: '40', students: '20000' }
-------------------
modified values:--
school={ class: '34', teacher: '40', students: '30000' }
school_updated={ class: '34', teacher: '40', students: '30000' }
see if the change is reflected 
*/