import React from "react";
import {useNavigate} from "react-router-dom";
import {SideBarStyles, SideBarTitle, SideBarButton, SideBarItems, SideBarItem} from './styles';
import { IoAppsOutline, IoPeopleOutline, IoLogOutOutline, IoCarSportOutline, IoCalendar, IoBasketOutline, IoCalendarNumberOutline, IoCaretForwardCircleOutline, IoMailOpenOutline, IoLogoWhatsapp } from "react-icons/io5";


function SideBar() {

    let navigation = useNavigate();
    function onHandleSubmit(evt) {
        evt.preventDefault();
        navigation('/');

    }

    return ( 
        <SideBarStyles>
            <SideBarTitle><IoAppsOutline />&nbsp;&nbsp;DASHBOARD</SideBarTitle>
            
            <SideBarItems>
                <SideBarItem><SideBarButton><IoPeopleOutline />&nbsp;&nbsp;PROFILE</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton onClick={onHandleSubmit}><IoLogOutOutline />&nbsp;&nbsp;LOGOUT</SideBarButton></SideBarItem>
            </SideBarItems>

            <SideBarItems>
                <SideBarItem><SideBarButton><IoCarSportOutline />&nbsp;&nbsp;CAR CATEGORIES</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><IoBasketOutline />&nbsp;&nbsp;PRODUCTS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><IoCarSportOutline />&nbsp;&nbsp;BY MAKE</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><IoCalendar />&nbsp;&nbsp;BY YEARS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><IoCalendarNumberOutline />&nbsp;&nbsp;UPCOMING</SideBarButton></SideBarItem>
            </SideBarItems>
            
            <SideBarItems>
                <SideBarItem><SideBarButton><IoCaretForwardCircleOutline />&nbsp;&nbsp;TEST DRIVE</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><IoCarSportOutline />&nbsp;&nbsp;1/4 MILE RACE</SideBarButton></SideBarItem>
            </SideBarItems>            

            <SideBarItems>
                <SideBarItem><SideBarButton><IoPeopleOutline />&nbsp;&nbsp;CAREERS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><IoLogoWhatsapp />&nbsp;&nbsp;CONTACT US</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><IoMailOpenOutline />&nbsp;&nbsp;SUBMIT A REVIEW</SideBarButton></SideBarItem>
            </SideBarItems>


        </SideBarStyles>
     );
}

export default SideBar;