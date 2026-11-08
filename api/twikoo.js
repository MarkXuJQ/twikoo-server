const { createTkserverHandler } = require('tkserver')

// Keep one handler/database instance per warm Vercel function instance.
const twikooHandler = createTkserverHandler()

module.exports = async function twikoo(request, response) {
  // Vercel normally parses JSON bodies, but normalize string and empty bodies
  // so the handler also works with raw requests and local Vercel emulation.
  if (typeof request.body === 'string' || Buffer.isBuffer(request.body)) {
    try {
      request.body = JSON.parse(request.body.toString())
    } catch {
      request.body = {}
    }
  }
  if (!request.body || typeof request.body !== 'object' || Array.isArray(request.body)) {
    request.body = {}
  }

  return twikooHandler(request, response)
}
