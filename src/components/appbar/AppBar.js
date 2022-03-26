import React from 'react';

import {IoEllipsisVertical, IoNotificationsOutline, IoMailOutline, IoPersonCircleOutline, IoCarSportOutline} from 'react-icons/io5'


import {AppBarItem, AppBarItems, AppBarStyles} from './styles'
import {IconButton} from './../../ui/buttons'

import { Link } from "react-router-dom";

function AppBar(props) {
    return (  
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>
                <Link to="/">
                    <IconButton>
                        <IoCarSportOutline size="1.25rem" color="red"/>
                    </IconButton>
                    CARS
                </Link>      
                </AppBarItem>
                <AppBarItem>
                    <IconButton>
                        <IoNotificationsOutline size="1.25rem" color="grey"/>
                    </IconButton>
                    <IconButton>
                        <IoMailOutline size="1.25rem" color="grey"/>
                    </IconButton>
                    <IconButton>
                        <IoPersonCircleOutline size="2.5rem" color="grey"/>
                    </IconButton>
                    <IconButton>
                        <IoEllipsisVertical size="1.25rem" color="grey"/>
                    </IconButton>


                </AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;