import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink top='about' onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink top='discover' onClick={toggle}>
                            Discover
                        </SidebarLink>
                        <SidebarLink top='services' onClick={toggle}>
                            Services
                        </SidebarLink>
                        <SidebarLink top='signup' onClick={toggle}>
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='signin'>
                            Sign In
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
