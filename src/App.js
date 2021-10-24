import React,{Suspense} from 'react'

import {Route,Switch} from 'react-router-dom'




const Match=React.lazy(() => import('./pages/match'));
const Layout=React.lazy(() => import('./components/Layout'));
const Advertiser=React.lazy(() => import('./pages/advertiser'));
const Home=React.lazy(() => import('./pages/home'));
const DMCA=React.lazy(() => import('./pages/dmca'));

function App() {
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
