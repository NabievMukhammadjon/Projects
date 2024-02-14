import React from "react";
import './main.global.css'
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { Layout } from "./shared/Layout";

function AppComponent() {
  return (
    <div>
      <Layout>
        <Header />
        <Content />
      </Layout>
    </div>
  );
}

export const App = hot(() => <AppComponent />);
