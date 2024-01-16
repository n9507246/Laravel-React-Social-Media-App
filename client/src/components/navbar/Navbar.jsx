import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "@context/darkModeContext";
import useAuth from '@hooks/AuthHook'

import './styles.scss';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ProfileCircle from '@components/profileCircle/ProfileCircle';
import MyLink from '@components/myLink/myLink';


export default function (){
    const {darkMode, toggle} = useContext(DarkModeContext)
    const {currentUser} = useAuth()
    return(
        <div className='navbar'>
            <div className='left'>
                <Link to='/'>
                    <span>My social</span>
                </Link>
                <HomeOutlinedIcon/>
                {
                    darkMode ? <DarkModeOutlinedIcon onClick={toggle}/> 
                    :
                    <WbSunnyOutlinedIcon onClick={toggle}/> 
                     
                }
                
                <GridViewOutlinedIcon/>
                <div className='search'>
                    <SearchOutlinedIcon/>
                    <input type='text' placeholder='Search...'/>
                </div>
            </div>
            <div className='right'>
                <Link to='/profile/1'><PersonOutlinedIcon/></Link>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <ProfileCircle className='user' userData={currentUser}/>
            </div>
        </div>
    )
}