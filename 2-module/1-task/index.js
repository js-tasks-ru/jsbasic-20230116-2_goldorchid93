function sumSalary(salaries) {
  let summa = 0
  for (let key in salaries) {
    const isNumber = !Number.isNaN(salaries[key]) 
    const isFinite = Number.isFinite(salaries[key])
    if (isNumber && isFinite) {
      summa = summa + salaries[key]
    }
  }
  return summa
}
