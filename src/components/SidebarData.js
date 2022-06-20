import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import '../App.css'
import {FilmIcon} from '@heroicons/react/solid'
// import {HomeIcon} from '@heroicons/react/outline'
import {BookOpenIcon} from '@heroicons/react/outline'
import {MusicNoteIcon} from '@heroicons/react/solid'

export const SidebarData = [
    {
        title: 'Favorites',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <FilmIcon/>,
        // icon: <MdIcons.MdLocalMovies />,
        cName: 'nav-text'
    },
    {
        title: 'Books',
        path: '/books',
        icon: <BookOpenIcon />,
        // icon: <AiIcons.AiFillBook />,
        cName: 'nav-text'
    },
    {
        title: 'Albums',
        path: '/albums',
        icon: <MusicNoteIcon />,
        // icon: <BsIcons.BsFillFileEarmarkMusicFill />,
        cName: 'nav-text'
    },

]