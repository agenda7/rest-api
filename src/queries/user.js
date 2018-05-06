const tname = 'users'

const read = `SELECT * FROM ${tname}`

const readOne = usersId => {
  return `SELECT * FROM ${tname} WHERE ServicesID = ${usersId}`
}

const create = `INSERT INTO ${tname} SET ?`

const update = usersId => {
  return `UPDATE ${tname} SET ? WHERE ServicesID = ${usersId}`
}

const remove = usersId => {
  return `DELETE FROM ${tname} WHERE ServicesID = ${usersId}`
}

const search = query => {
  return `SELECT * FROM ${tname} WHERE name = '%${query}%'`
}

module.exports = { read, readOne, create, update, remove }