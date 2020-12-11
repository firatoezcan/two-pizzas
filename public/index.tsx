import hydrate from "preact-iso/hydrate";
import lazy, { ErrorBoundary } from "preact-iso/lazy";
import { LocationProvider, Router } from "preact-iso/router";
import React from "react";
import { _404 } from "./pages/_404";
import { PricingPage } from "./components/tailwindui/pricing";

export function App() {
  return (
    <LocationProvider>
      <div className="app">
        <ErrorBoundary>
          <Router>
            <PricingPage path="/" />
            <_404 default />
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
