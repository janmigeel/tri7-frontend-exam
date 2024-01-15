function factorial(number) {
    if (number === 0) {
      return 1
    } else {
      return number * factorial(n - 1)
    }
  }
  
  const result = factorial(5)
  console.log(result)