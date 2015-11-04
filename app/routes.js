export default function (router) {
  router.map({
    '/': {
      component: require('./views/home/index.js')
    }
  })

  router.redirect({
    '*': '/'
  })
}
