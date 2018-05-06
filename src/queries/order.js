const tname = 'users'

const read = `SELECT * FROM ${tname}`

const readOne = ordersId => {
  return `SELECT * FROM ${tname} WHERE ordersId = ${ordersId}`
}

const create = `INSERT INTO ${tname} SET ?`

const update = ordersId => {
  return `UPDATE ${tname} SET ? WHERE ordersId = ${ordersId}`
}

const remove = ordersId => {
  return `DELETE FROM ${tname} WHERE ordersId = ${ordersId}`
}


module.exports = { read, readOne, create, update, remove }