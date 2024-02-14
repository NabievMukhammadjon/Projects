import React, { useEffect, useState } from "react";
import './main.global.css'
import { hot } from "react-hot-loader/root";
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/PostsContext";
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, saveToken } from "./store/reducer";
import thunk from "redux-thunk";
import { BrowserRouter, Navigate, redirect, Route, Routes } from "react-router-dom";
import { Post } from "./shared/Post";
import { Page404 } from "./shared/Page404";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

function AppComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    useEffect(() => {
        store.dispatch(saveToken() as any)
    });
    
    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <UserContextProvider >
                        <Layout>
                            <Header />
                                <Content>
                                    <Routes>
                                        <Route path="/auth" element={<Navigate replace to={'/posts'} />} />
                                        <Route path="/" element={<Navigate replace to={'/posts'} />} />
                                        <Route path="404" element={<Page404 />} />
                                        <Route path="/posts" element={<CardsList />}>
                                            <Route path=":id" element={<Post />} />
                                        </Route>
                                        <Route path="*" element={<Navigate replace to={'/404'} />} />
                                    </Routes>
                                </Content>
                        </Layout>
                    </UserContextProvider>
                </BrowserRouter>            
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);