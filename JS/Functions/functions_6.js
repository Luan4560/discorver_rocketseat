// Callback function

const sayMyName = (name) => {
  console.log('Before execute a callback function')

  name()
  
  console.log('After execute a callback function')
}

sayMyName(
  () => {
    console.log(`I am in a callback`)
  }
)