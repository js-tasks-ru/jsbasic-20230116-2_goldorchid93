/* function showSalary(users, age) {
  const tmp = users.reduce((resultString, currentUser) => {
    if (currentUser.age <= age) {
      resultString = resultString + currentUser.name + ', ' + currentUser.balance + '\n'
    }
    return resultString
  }, '')
  const result = tmp.slice(0, -1)
  return result
} */

function showSalary(users, age) {
  const tmp = users
    .filter((currentUser) => {
      return currentUser.age <= age
    })
    .map((currentUser) => {
      const resultString = currentUser.name + ', ' + currentUser.balance
      return resultString
    })
    .join('\n')
  return tmp
}


