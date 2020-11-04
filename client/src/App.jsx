import {Suspense, lazy} from 'react'
import {Route, Switch} from 'react-router-dom';
import {Main} from "./layout/main";
import {Loading} from "./components/Loading";

const VideoList = lazy(() => import('./views/Videos'))

function App() {
  return (
      <Main>
        <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path="/" component={VideoList}/>
        </Switch>
        </Suspense>
      </Main>
  );
}

export default App;
