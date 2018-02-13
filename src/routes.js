import Home from '@/services/layout/home.vue'
import Cumple from '@/services/layout/Cumple.vue'
import Planet from '@/components/Planet.vue'
import Results from '@/components/Results.vue'

const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/cumple', component: Cumple, name: 'cumple'},
  {path: '/planets/:id', component: Planet, name: 'planet'},
  {path: '/results/:id', component: Results , name: 'results'}
]

export default routes 