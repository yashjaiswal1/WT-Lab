let text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis maxime deleniti minus doloribus illo ab nulla nemo cupiditate! Aliquid odio laboriosam facere hic totam! Asperiores quasi possimus expedita repudiandae doloremque!";
document.getElementById("para1").innerHTML = text.length;

let escape_sequence_example = "This is  in \"quotes\" and 'quotes'. ";
document.getElementById("para2").innerHTML = escape_sequence_example;

let str_obj = new String("Yash");
let str = "Yash";
document.getElementById("para3").innerHTML = str_obj == str; // True
document.getElementById("para4").innerHTML = str_obj === str; // False

let some_str =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id fugiat aperiam suscipit doloribus perspiciatis, quidem iste ducimus unde, inventore fuga molestiae recusandae, harum incidunt quia quis nam enim esse commodi.";
document.getElementById("para5").innerHTML = text.indexOf("ipsum");
document.getElementById("para6").innerHTML = text.lastIndexOf("ipsum");
document.getElementById("para7").innerHTML = text.search("ipsum");

let str1 = "Apples, Kiwi, Bananas";
let res1 = str1.slice(1, 4);
let res2 = str1.slice(-4, -1);
document.getElementById("para8").innerHTML = res1;
document.getElementById("para9").innerHTML = res2;

// first parameter indicates the start position and second parameter specifies the length of the substring to be extracted
document.getElementById("para10").innerHTML = str1.substr(1, 4);

// Same as slice but does not take negative parameters
document.getElementById("para11").innerHTML = str1.substring(1, 4);

// replace() function replaces a substring with the given 2nd parameter
document.getElementById("para12").innerHTML = text.replace("ipsum", "REPLACED");
