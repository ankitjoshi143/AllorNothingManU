import React from 'react'

import { IoMailOutline, IoNotificationsOutline, IoSettingsOutline, IoCarSportOutline, IoPersonCircleOutline } from "react-icons/io5";

import {AppBarStyles, AppBarItem, AppBarItems, AppBarItemGroup} from './styles'

function AppBar (props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem><IoCarSportOutline size="3rem" color="red"/> Man U Rent</AppBarItem>
                <AppBarItemGroup>
                    <span><IoMailOutline size="2.5rem" color="gray"/></span>
                    <span><IoNotificationsOutline size="2.5rem" color="gray" /></span>
                    <span><IoSettingsOutline size="2.5rem" color="gray" /></span>
                    <span><IoPersonCircleOutline size="3rem" color="gray" /></span>
                    
                </AppBarItemGroup>

            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar