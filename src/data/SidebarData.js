import React from "react";

import {FilmIcon} from '@heroicons/react/solid'

import {BookOpenIcon} from '@heroicons/react/outline'
import {MusicNoteIcon} from '@heroicons/react/solid'
// import { initialState } from "../store/favorites-context"

export const SidebarData = [


    {
        title: 'Movies',
        path: '/movies',
        icon: <FilmIcon/>,

    },
    {
        title: 'Books',
        path: '/books',
        icon: <BookOpenIcon />,
    },
    {
        title: 'Albums',
        path: '/albums',
        icon: <MusicNoteIcon />,
    }

]