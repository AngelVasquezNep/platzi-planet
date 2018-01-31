import Home from '@/services/layout/home.vue'
import Cumple from '@/services/layout/Cumple.vue'
import Planet from '@/components/Planet.vue'


const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/cumple', component: Cumple, name: 'cumple'},
  {path: '/planets/:id', component: Planet, name: 'planet'}
]

export default routes 