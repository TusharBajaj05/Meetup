import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';
import { FavoritesContextProvider } from './store/favorites-context'

function App() {
  return (
    <FavoritesContextProvider>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element = {<AllMeetups />} />
          <Route path ='/New-Meetup' element = {<NewMeetup />} />
          <Route path = '/Favorites' element = {<Favorites />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </FavoritesContextProvider>  
  );
}

export default App;
