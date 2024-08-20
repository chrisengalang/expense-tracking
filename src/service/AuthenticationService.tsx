import { LoginDto } from "../model/dto/LoginDto"
import { RegistrationDto } from "../model/dto/RegistrationDto"

const signIn = (loginDto : LoginDto) => {
  console.log(`Username: ${loginDto.username}, Password: ${loginDto.password}`)
}

const register = (registrationDto: RegistrationDto) => {
  console.log(`Username: ${registrationDto.username}, Password: ${registrationDto.password}, Name: ${registrationDto.name}`)
}

export {
  signIn,
  register
}