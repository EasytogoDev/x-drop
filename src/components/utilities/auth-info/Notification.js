/* eslint-disable */
import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';
import { Badge } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { UserActionDropDown } from './auth-info-style';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';

function NotificationBox() {
    const { rtl } = useSelector((state) => {
        return {
            rtl: state.ChangeLayoutMode.rtlData,
        };
    });

    const [notifications, setNotifications] = useState([]);

    function renderThumb({ style }) {
        const thumbStyle = {
            borderRadius: 6,
            backgroundColor: '#F1F2F6',
        };
        return <div style={{ ...style, ...thumbStyle }} />;
    }

    const renderTrackVertical = () => {
        const thumbStyle = {
            position: 'absolute',
            width: '6px',
            transition: 'opacity 200ms ease 0s',
            opacity: 0,
            [rtl ? 'left' : 'right']: '2px',
            bottom: '2px',
            top: '2px',
            borderRadius: '3px',
        };
        return <div className="hello" style={thumbStyle} />;
    };

    function renderView({ style }) {
        const customStyle = {
            marginRight: rtl && 'auto',
            [rtl ? 'marginLeft' : 'marginRight']: '-17px',
        };
        return <div style={{ ...style, ...customStyle }} />;
    }

    renderThumb.propTypes = {
        style: PropTypes.shape(PropTypes.object),
    };

    renderView.propTypes = {
        style: PropTypes.shape(PropTypes.object),
    };

    function carregaNotificacao() {
        const accessToken = Cookies.get('access_token');
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/notificacoes`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const mappedNotifications = result.map(notification => ({
                    title: notification.tituloNOTIFICACAO,
                    content: notification.corpoNOTIFICACAO,
                    date: notification.dataNOTIFICACAO,
                    image: notification.imagemNOTIFICACAO,
                }));
                setNotifications(mappedNotifications);
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        carregaNotificacao();
    }, []);

    const content = (
        <UserActionDropDown className="ninjadash-top-dropdown">
            <Heading as="h5" className="ninjadash-top-dropdown__title">
                <span className="title-text">Notificações</span>
                <Badge className="badge-success" count={notifications.length} />
            </Heading>
            <Scrollbars
                autoHeight
                autoHide
                renderThumbVertical={renderThumb}
                renderView={renderView}
                renderTrackVertical={renderTrackVertical}
                renderTrackHorizontal={(props) => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
            >
                <ul className="ninjadash-top-dropdown__nav notification-list">
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <li key={index}>
                                <Link to="#">
                                    <div className="ninjadash-top-dropdown__content notifications">
                                        <div className="notification-icon bg-primary">
                                            <img src={notification.image} alt="notification" style={{ width: '30px', height: '30px' }} />
                                        </div>
                                        <div className="notification-content d-flex">
                                            <div className="notification-text">
                                                <Heading as="h5">{notification.title}</Heading>
                                                <p>{notification.content}</p>
                                                <p>{new Date(notification.date).toLocaleString()}</p>
                                            </div>
                                            <div className="notification-status">
                                                <Badge dot />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>
                            <div className="ninjadash-top-dropdown__content notifications">
                                <div className="notification-content d-flex">
                                    <div className="notification-text">
                                        <Heading as="h5">Sem notificações</Heading>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </Scrollbars>
        </UserActionDropDown>
    );

    return (
        <div className="ninjadash-nav-actions__item ninjadash-nav-actions__notification">
            <Popover placement="bottomLeft" content={content} action="click">
                <Badge dot offset={[-8, -5]}>
                    <Link to="#" className="ninjadash-nav-action-link">
                        <img
                            src="/static/icons/meli-mobile-removebg-preview.png"
                            alt="icon"
                            style={{ width: '48px', height: '48px' }}
                        />
                    </Link>
                </Badge>
            </Popover>
        </div>
    );
};

export default NotificationBox;
