import { Text } from "./components/Text";
import "./App.css";
import { Suspense } from "react";
import React from "react";

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Text />
      </div>
    </Suspense>
  );
}

export default App;