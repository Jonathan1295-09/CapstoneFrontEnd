import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import App from "./App";
import Show from "./pages/Show";
import Home from "./pages/Home"
import Projects from './pages/Projects';
import { indexLoader, showLoader } from './loaders';
import { createAction, deleteAction, updateAction } from './actions';
import Create from './pages/Create';

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/project/' element={<Projects/>} loader={indexLoader}/>
            <Route path="/create/" element={<Create/>} loader={indexLoader} action={createAction}/>
            <Route path='/project/:id' element={<Show/>} loader={showLoader}/>
            <Route path="/project/:id" action={updateAction}/>
            <Route path="/project/:id" action={deleteAction}/>
        </Route>
    </>
));

export default router;