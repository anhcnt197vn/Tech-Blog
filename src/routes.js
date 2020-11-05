const createRoutes = require('next-routes')
const routes = createRoutes()

routes
  .add('index', '/')

const Router = routes.Router
const Link = routes.Link

module.exports = {
  routes,
  Router,
  Link,
}
