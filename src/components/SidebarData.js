import React from "react";
import '../App.css'
import {FilmIcon} from '@heroicons/react/solid'
import {HeartIcon} from '@heroicons/react/solid'
import {BookOpenIcon} from '@heroicons/react/outline'
import {MusicNoteIcon} from '@heroicons/react/solid'
// import { initialState } from "../store/favorites-context"

export const SidebarData = [
    // ${totalFavorites}
    {
        title: 'Favorites' ,
        path: '/',
        icon: <HeartIcon/>,
        cName: 'nav-text'
    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <FilmIcon/>,
        cName: 'nav-text'
    },
    {
        title: 'Books',
        path: '/books',
        icon: <BookOpenIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Albums',
        path: '/albums',
        icon: <MusicNoteIcon />,
        cName: 'nav-text'
    }

]