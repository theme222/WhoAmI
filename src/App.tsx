import type { Component, JSXElement } from 'solid-js';
import { Router, Route, RouteSectionProps } from '@solidjs/router';
import RootPage from './pages/RootPage'
import Context from './context/Context';
import Background from './components/atom/Background';

import { onMount } from 'solid-js';
import Navbar from './components/molecule/Navbar';
import BrowserPage from './pages/knowledge/BrowserPage';
import NotFoundPage from './pages/404';

function DefaultPageWrapper(props: any) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function App() {
  return (
    <>
      <Context>
        <Background />
        <div class="absolute w-full">
          <Router>
            <Route path="/" component={RootPage} />
            <Route path="/knowledge" component={DefaultPageWrapper}>
              <Route path="browser" component={BrowserPage} />
            </Route>
            <Route path="*404" component={NotFoundPage} />
          </Router>
        </div>
      </Context>
    </>
  );
};
