const tname = 'users'

const readAll = `SELECT * FROM ${tname}`

const read = userId => {
  return `SELECT * FROM ${tname} WHERE id = ${userId}`
}

const create = user => {
  return `INSERT INTO ${tname} (name, email, password, fbId) VALUES (${user.name}, ${user.email}, ${user.password}, ${user.fbId})`
}

module.exports = { readAll, read, create }