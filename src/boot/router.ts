import { boot } from 'quasar/wrappers'
let $router
export default boot(({ router }) => {
  $router = router
})

export { $router }
