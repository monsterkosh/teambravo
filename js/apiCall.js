// // @ts-nocheck
async function retrievePerson() {
  // @ts-ignore
  const personOne = new Parse.Query('testimonials');

  try {
    const person1 = await personOne.get('cSMpMf40BZ');
    const name1 = person1.get('name');
    const job1 = person1.get('job');
    // console.log(name, job);
    document.getElementById('db-name1').innerHTML = name1;
    document.getElementById('db-job1').innerHTML = job1;

    const person2 = await personOne.get('b3f6vzHHsj');
    const name2 = person2.get('name');
    const job2 = person2.get('job');
    // console.log(name, job);
    document.getElementById('db-name2').innerHTML = name2;
    document.getElementById('db-job2').innerHTML = job2;

    const person3 = await personOne.get('ViiUxsXXy7');
    const name3 = person3.get('name');
    const job3 = person3.get('job');
    // console.log(name, job);
    document.getElementById('db-name3').innerHTML = name3;
    document.getElementById('db-job3').innerHTML = job3;
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
}
