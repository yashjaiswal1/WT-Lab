function call_str_methods() {
  let ch = prompt("Enter which operation to be performed");
  switch (ch) {
    case "slice":
      let res1 = prompt("Slicing from index 1 to 4...", "Apples");
      alert(res1.slice(1, 4));
      break;
    case "substr":
      let res2 = prompt("Substr from index 1 to 4...", "Apples");
      alert(res2.substr(1, 4));
      break;
    case "substring":
      let res3 = prompt("Substring from index 1 to 4...", "Apples");
      alert(res3.substring(1, 4));
      break;
    case "replace":
      let orig_str = prompt(
        "What is the original string?",
        "Apples, Bananas, Oranges"
      );
      let replace = prompt("What is to be replaced?", "Apples");
      alert(orig_str.replace(replace, "REPLACED"));
      break;
    case "uppercase":
      let res4 = prompt("Converting to uppercase");
      alert(res4.toUpperCase());
      break;
    case "lowercase":
      let res8 = prompt("Converting to lowercase");
      alert(res8.toLowerCase());
      break;
    case "concat":
      let str1 = prompt("Enter string 1");
      let str2 = prompt("Enter string 2");
      alert(str1.concat(str2));
      break;
    case "trim":
      let res5 = prompt("Trim the string", "    abc     ");
      alert(res5.trim());
      break;
    case "padstart":
      let res6 = prompt("padStart...");
      alert(res6.padStart(10, "/"));
      break;
    case "padend":
      let res7 = prompt("padEnd...");
      alert(res7.padEnd(10, "/"));
      break;
    case "index":
      let str3 = prompt("Enter a string");
      let index = prompt("Enter an index");
      alert(str3.indexOf(index));
      break;
  }
}
