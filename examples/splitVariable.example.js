/* Each variable must have a SINGLE RESPONSABILITY, if a variable happens to have
more than one responsability or meaning, it should be split into multiple variables. */

function simpleExampleoriginal(height, width) {
  let temp = 2 * (height + width);
  console.log(temp);
  
  temp = height * width;
  console.log(temp);
}

function simpleExamplerefactored(height, width) {
  const perimeter = 2 * (height + width);
  console.log(perimeter);
  
  const area = height * width;
  console.log(area);
}

function distanceTravelled(scenario, time) {
  let result;
  
  let acc = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime;

  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
  }

  return result;
}

function distanceTravelledRefactored(scenario, time) {
  let result;
  
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;

  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }

  return result;
}