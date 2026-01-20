import type { Component, JSXElement } from 'solid-js';
import { Router, Route, RouteSectionProps } from '@solidjs/router';
import { ResetAllStatuses } from '@/libs/helperFuncs';
import RootPage from './pages/RootPage'
import Context from './context/Context';
import Background from './components/atom/Background';
import BreakPointIndicator from './components/atom/BreakPointIndicator';

import { onMount } from 'solid-js';
import Navbar from './components/molecule/Navbar';
import BrowserPage from './pages/knowledge/BrowserPage';
import NotFoundPage from './pages/404';
import DetailOverlay from './components/molecule/DetailOverlay';

function DefaultPageWrapper(props: any) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function App() {
  onMount(() => {
    ResetAllStatuses(); // This might be computationally expensive? Consider moving to a web worker?
    
  });

  return (
    <>
      {import.meta.env.DEV && <BreakPointIndicator />}
      <Context>
        <Background />
        <DetailOverlay />
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
