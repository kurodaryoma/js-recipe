const genkiFunction = function(number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n.toString().split("3").length > 1) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
genkiFunction()
