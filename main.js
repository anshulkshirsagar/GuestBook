guest_array = [];

function add_guest() {
  var guestname = document.getElementById("guest_name").value;
  guest_array.push(guestname);
  document.getElementById("guest_list").innerHTML = guest_array;
}

function show_list() {
  var htmldata = "";
  for (var i = 0; i < guest_array.length; i++) {
    htmldata = htmldata + "<label>" + guest_array[i] + "</label><br>";
  }
  document.getElementById("guest_list2").innerHTML = htmldata;
}

function sorted_list(){
    var htmldata = "";
    guest_array.sort();
    for (var i = 0; i < guest_array.length; i++) {
      htmldata = htmldata + "<label>" + guest_array[i] + "</label><br>";
    }
    document.getElementById("sorted_guest_list").innerHTML = htmldata;
}

function search_guest() {
  var s = document.getElementById("search_guest_input").value;
  var found = 0;
  var j;
  for(j=0; j<guest_array.length; j++){
      if(s==guest_array[j]){
          found=found+1;
      }
  }
  document.getElementById("search_list").innerHTML="Name found "+found+" time(s)";
  console.log("Found name "+found+" time(s)")
}
