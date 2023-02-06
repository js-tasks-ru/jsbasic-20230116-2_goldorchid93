/* function namify(users) {
  const names = [];
  users.forEach((user) => {
    names.push(user.name)
  })
  return names;
} */

function namify(users) {
  const names = users.map((user) => {
    return user.name
  })
  return names;
}
