const tname = 'users'

const read = `SELECT * FROM ${tname}`

const readOne = userId => {
  return `SELECT * FROM ${tname} WHERE id = ${userId}`
}

const create = user => {
  return `INSERT INTO ${tname} (name, email, password, fbId) VALUES (${user.name}, ${user.email}, ${user.password}, ${user.fbId})`
}

const update = user => {
  return `INSERT INTO ${tname} (name, email, password, fbId) VALUES (${user.name}, ${user.email}, ${user.password}, ${user.fbId})`
}

const remove = userId => {
  return `INSERT INTO ${tname} (name, email, password, fbId) VALUES (${user.name}, ${user.email}, ${user.password}, ${user.fbId})`
}

module.exports = { read, readOne, create, update, remove }