function sumOfArrays() {
  let arr1 = [1, 1, 1, 1];
  let arr2 = [1, 1, 1, 1, 1, 1, 1];
  result = [];
  while (arr1.length != arr2.length) {
    if (arr1.length < arr2.length) {
      arr1.push(0);
    } else if (arr2.length < arr1.length) {
      arr2.push(0);
    }
  }
  for (i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  alert(result);
}

function findLeapYear() {
  let year = prompt("Enter a year");
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    alert(year + " is a leap year");
  } else {
    alert(year + " is not a leap year");
  }
}

function sumAndProduct() {
  let arr = prompt("Enter elements of the array").split(" ");
  let sum = 0;
  let prod = 1;
  for (i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    prod *= Number(arr[i]);
  }
  alert("Sum = " + String(sum) + "; Product = " + String(prod));
}
