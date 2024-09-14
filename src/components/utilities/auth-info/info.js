/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import UilBell from '@iconscout/react-unicons/icons/uil-bell';
import UilDollarSign from '@iconscout/react-unicons/icons/uil-dollar-sign';
import UilSetting from '@iconscout/react-unicons/icons/uil-setting';
import UilSignout from '@iconscout/react-unicons/icons/uil-signout';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
// import { ReactSVG } from 'react-svg';
import { Avatar } from 'antd';
import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { themeColor } from '../../../config/theme/themeVariables';


import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import Message from './Message';
import Notification from './Notification';
import Search from './Search';
import Settings from './settings';
import { logOut } from '../../../redux/authentication/actionCreator';
import { changeLayoutMode } from '../../../redux/themeLayout/actionCreator';

import { Dropdown } from '../../dropdown/dropdown';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';

const AuthInfo = React.memo(() => {
  const dispatch = useDispatch();

/*   const [state, setState] = useState({
    flag: 'en',
  }); */
  // const state = {flag: 'en'}
 
  const [User, setUser] = useState([]);
  const [ModeTheme, setModeTheme] = useState(0);  


  const [IconTheme, setIconTheme] = useState({
    theme: 'moon',
  });
 // const IconTheme = { theme: 'sun' }


  const navigate = useNavigate();
  // const { i18n } = useTranslation();
  // const { flag } = state;

  const SignOut = (e) => {
    e.preventDefault();

    dispatch(logOut(() => navigate('/')));
  };



  const changeLayout = (mode) => {
    dispatch(changeLayoutMode(mode));
  };
 

  const darkmodeActivated = () => {
    document.body.classList.add('dark-mode');
    setModeTheme(1);

    setIconTheme({
      ...IconTheme,
      theme: 'sun',
    });
    
  };

  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark-mode');
    setModeTheme(0);
    setIconTheme({
      ...IconTheme,
      theme: 'moon',
    });
    
  };



  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i += 1) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }


  

  useEffect(() => { 

    function parseJwt () {

      const token = getCookie('access_token');
      
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

      const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(c => {
        const hex = c.charCodeAt(0).toString(16).padStart(2, '0');
        return `%${hex}`;
      }).join(''));

      console.log(JSON.parse(jsonPayload));

      return JSON.parse(jsonPayload);
  }

    const dados = parseJwt ();


    setUser(dados);
  
  }, []); // Executa uma vez ao montar o componente



  const userContent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <img src={User.foto} width={100} />
          <figcaption>
            <Heading as="h5">{User.nome}</Heading>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link target='_blank' to="#">
              <UilUser /> Perfil
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilSetting /> Configurações
            </Link>
          </li>
          <li>
            <Link to="https://github.com/ViniAguiar1">
              <UilDollarSign /> GitHub
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilUsersAlt /> Atividade
            </Link>
          </li>
          <li>
            <Link to="/aprendizado/video-aulas">
              <UilBell /> Video Aulas
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <UilSignout /> Sair
        </Link>
      </div>
    </UserDropDwon>
  );

/*   const onFlagChangeHandle = (value, e) => {
    e.preventDefault();
    setState({
      ...state,
      flag: value,
    });
    i18n.changeLanguage(value);
  }; */

  // onFlagChangeHandle('pt')

 
  const country = (
    <NavAuth>
 
     {/*  <Link onClick={() => {
            // toggleCollapsed();
            darkmodeActivated();
            changeLayout('darkMode');
          }} to="#">
            <img src='https://cdn-icons-png.flaticon.com/512/1229/1229467.png'/>
        <span>Modo Escuro</span>
      </Link> 

      <Link onClick={() => {
            // toggleCollapsed();
            darkmodeDiactivated();
            changeLayout('lightMode');
          }} to="#" style={{ color: themeColor }}>
          <img  src='https://cdn-icons-png.flaticon.com/512/42/42074.png'/>
        <span>
          Modo Claro</span>
      </Link> */}
 
    </NavAuth>
  );

  return (
    <InfoWraper>
      <Search />
      <Message />
      <Notification />
      <Settings />
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__language">
        <Dropdown placement="bottomRight" content={country} trigger="click">
          {ModeTheme ? 
          <Link 
          onClick={() => {
            // toggleCollapsed();
            darkmodeDiactivated();
            changeLayout('lightMode');
          }}
          
          to="#" className="ninjadash-nav-action-link">
            <img src={require(`../../../static/img/icon/sun.png`)} alt="" />           
            {/* <ReactSVG src={require('../../../static/img/icon/sun.svg').default} /> */} 
          </Link> 
          :
          <Link 
          
          onClick={() => {
            // toggleCollapsed();
            darkmodeActivated();
            changeLayout('darkMode');
          }}
           to="#" className="ninjadash-nav-action-link" style={{ color: themeColor }}>
          <img src={require(`../../../static/img/icon/moon.png`)} alt="" />           
          {/* <ReactSVG src={require('../../../static/img/icon/sun.svg').default} /> */} 
        </Link>
        }
        </Dropdown>
      </div>
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <Avatar src={User.foto} />
            <span className="ninjadash-nav-actions__author--name">{User.nome}</span>
            <UilAngleDown />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
});

export default AuthInfo;
