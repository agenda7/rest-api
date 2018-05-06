const tname = 'users'

const read = `SELECT * FROM ${tname}`

const readOne = companyId => {
  return `SELECT * FROM ${tname} WHERE companyId = ${companyId}`
}

const create = `INSERT INTO ${tname} SET ?`

const update = companyId => {
  return `UPDATE ${tname} SET ? WHERE companyId = ${companyId}`
}

const remove = companyId => {
  return `DELETE FROM ${tname} WHERE companyId = ${companyId}`
}

const search = query => {
  return `SELECT * FROM ${tname} WHERE name = '%${query}%'`
}


module.exports = { read, readOne, create, update, remove }