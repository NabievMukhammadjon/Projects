import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostsContextData {
    id?: string;
    author?: string;
    title?: string;
    rating?: string;
    avatar?: string;
    previewImg?: string;
    url?: string;
}

export const postsContext = React.createContext<IPostsContextData[]>([]);

export function PostsContextProvider({children}: {children: React.ReactNode}) {
    const [posts] = usePostsData();

    return (
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    )
}