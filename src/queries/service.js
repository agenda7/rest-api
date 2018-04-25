const tname = 'Services'

const read = `SELECT * FROM ${tname}`

const readOne = servicesId => {
  return `SELECT * FROM ${tname} WHERE ServicesID = ${servicesId}`
}

const create = `INSERT INTO ${tname} SET ?`

const update = serviceId => {
  return `UPDATE ${tname} SET ? WHERE ServicesID = ${serviceId}`
}

const remove = serviceId => {
  return `DELETE FROM ${tname} WHERE ServicesID = ${serviceId}`
}

const search = query => {
  return `SELECT * FROM ${tname} WHERE title = '%${query}%'`
}

module.exports = { read, readOne, create, update, remove }