import BotaoAdd from '../../components/BotaoAdd'
import BarraLateral from '../../container/BarraLateral'
import ListaDeTarefas from '../../container/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltro />
    <ListaDeTarefas />
    <BotaoAdd />
  </>
)

export default Home
