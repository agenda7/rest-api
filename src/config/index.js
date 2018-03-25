const envList = {
	development: require('./env/development'),
	production: require('./env/production')
}

const ENV = process.env.NODE_ENV || 'production'

module.exports = envList[ENV]