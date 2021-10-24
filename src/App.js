import React,{Suspense,useEffect} from 'react'

import {Route,Switch} from 'react-router-dom'
import ReactGA from 'react-ga';




const Match=React.lazy(() => import('./pages/match'));
const Layout=React.lazy(() => import('./components/Layout'));
const Advertiser=React.lazy(() => import('./pages/advertiser'));
const Home=React.lazy(() => import('./pages/home'));
const DMCA=React.lazy(() => import('./pages/dmca'));

function App() {
  useEffect(()=>{
    ReactGA.initialize('G-FYJ97ZGZTF');
    ReactGA.pageview(window.location.pathname + window.location.search);

  },[])
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
     <Layout>
       
       <Switch>
         <Route path="/" exact>
        <Home/>
        </Route>
        <Route path="/dmca" exact>
        <DMCA />
        </Route>
        <Route path="/advertiser" exact>
        <Advertiser/>
        </Route>
        <Route path="/home/live/:idMatch" exact >
        <Match />
        </Route>
        </Switch>
   
     </Layout>
     </Suspense>
    
  );
}

export default App;
