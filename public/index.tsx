import React from 'react'
import hydrate from "preact-iso/hydrate";
import { LocationProvider, Router } from "preact-iso/router";
import lazy, { ErrorBoundary } from "preact-iso/lazy";
import Home from "./pages/home/index";
import NotFound from "./pages/_404";
import Header from "./header";
import { PricingPage } from "./tailwindui/pricing";

const About = lazy(() => import("./pages/about/index"));

export function App() {
  return <PricingPage />
  return (
    <LocationProvider>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  const { default: prerender } = await import("preact-iso/prerender");
  return await prerender(<App {...data} />);
}
