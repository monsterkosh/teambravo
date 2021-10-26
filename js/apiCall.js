// @ts-nocheck
// // @ts-nocheck
// @ts-ignore

async function retrievePerson() {
  const e = new Parse.Query('testimonials');
  try {
    const t = await e.get('cSMpMf40BZ'),
      n = t.get('name'),
      a = t.get('job');
    (document.getElementById('db-name1').innerHTML = n),
      (document.getElementById('db-job1').innerHTML = a);
    const c = await e.get('b3f6vzHHsj'),
      i = c.get('name'),
      o = c.get('job');
    (document.getElementById('db-name2').innerHTML = i),
      (document.getElementById('db-job2').innerHTML = o);
    const m = await e.get('ViiUxsXXy7'),
      b = m.get('name'),
      d = m.get('job');
    (document.getElementById('db-name3').innerHTML = b),
      (document.getElementById('db-job3').innerHTML = d);
  } catch (e) {
    Rollbar.critical('Failed APIcall');
  }
}
Parse.initialize(
  'lE0eh2hx0evVb44b6cv2zxQXwz7AJxoQa1cluAHc',
  '9yEYCJ8PZejqxKMYqIIi90YMEnsxbbAcNkkZYsZz'
),
  (Parse.serverURL = 'https://parseapi.back4app.com/');
