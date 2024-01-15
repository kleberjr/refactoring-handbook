/* Each variable must have a SINGLE RESPONSABILITY, if a variable happens to have
more than one responsability or meaning, it should be split into multiple variables. */

function original(height, width) {
  let temp = 2 * (height + width);
  console.log(temp);
  
  temp = height * width;
  console.log(temp);
}

function refactored(height, width) {
  const perimeter = 2 * (height + width);
  console.log(perimeter);
  
  const area = height * width;
  console.log(area);
}