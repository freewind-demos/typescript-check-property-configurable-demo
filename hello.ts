const user: any = {}

Object.defineProperty(user, 'name1', {
  get() {
    return "typescript1"
  },
  configurable: true
})

Object.defineProperty(user, 'name2', {
  get() {
    return "typescript2"
  },
  configurable: false
})

const name1 = Object.getOwnPropertyDescriptor(user, 'name1')
console.log('name1:', name1!.configurable)

const name2 = Object.getOwnPropertyDescriptor(user, 'name2')
console.log('name2:', name2!.configurable)
