// apiの返り値の変換なんかを定義するBaseClass
import ToSnake from 'snake-case'
import ToCamel from 'camelcase'

export default {
  createJson (data) {
    var json = {}
    for (var key in data) {
      json[ToSnake(key)] = data[key]
    }
    return JSON.stringify(json)
  },
  nullCheck (data) {
    for (var key in data) {
      if (data[key] === '' || data[key] === null || data[key] === undefined) {
        console.log('null params')
        throw new Error('error')
      }
    }
  },
  createCamel (data) {
    var camelObject = {}
    if (typeof data !== 'object') {
      return data
    }
    if (data instanceof Array) {
      return this.camelArrayChange(data)
    }
    for (var key in data) {
      if (data[key] instanceof Array) {
        camelObject[ToCamel(key)] = this.camelArrayChange(data[key])
      } else if (data[key] instanceof Object) {
        camelObject[ToCamel(key)] = this.createCamel(data[key])
      } else {
        camelObject[ToCamel(key)] = data[key]
      }
    }
    return camelObject
  },
  camelArrayChange (array) {
    var camelArray = []
    for (var key in array) {
      camelArray.push(this.createCamel(array[key]))
    }
    return camelArray
  }
}
