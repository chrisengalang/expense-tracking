
const signIn = (username: string, password: string) => {
  console.log(`Username: ${username}, Password: ${password}`)
}

const register = (username: string, password: string, name: string) => {
  console.log(`Username: ${username}, Password: ${password}, Name: ${name}`)
}

export {
  signIn,
  register
}