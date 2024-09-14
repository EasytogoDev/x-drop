/* eslint-disable react/jsx-no-bind */
import { Badge } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Cookies from 'js-cookie';
import { UserActionDropDown } from './auth-info-style';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';

function MessageBox() {
    const { rtl } = useSelector((state) => {
        return {
            rtl: state.ChangeLayoutMode.rtlData,
        };
    });

    const [chamados, setChamados] = useState([]);

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

    function carregaChamados() {
        const accessToken = Cookies.get('access_token');
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/chamados`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const mappedChamados = result.map(chamado => ({
                    title: chamado.tituloCHAMADO,
                    content: chamado.descricaoCHAMADO,
                    status: chamado.statusCHAMADO,
                    prioridade: chamado.prioridadeCHAMADO,
                    empresa: chamado.empresaCHAMADO,
                    image: chamado.logo,
                }));
                setChamados(mappedChamados);
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        carregaChamados();
    }, []);

    const content = (
        <UserActionDropDown className="ninjadash-top-dropdown">
            <Heading className="ninjadash-top-dropdown__title" as="h5">
                <span className="title-text">Messages</span>
                <Badge className="badge-success" count={chamados.length} />
            </Heading>
            <Scrollbars
                autoHeight
                autoHide
                renderThumbVertical={renderThumb}
                renderView={renderView}
                renderTrackVertical={renderTrackVertical}
                renderTrackHorizontal={(props) => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
            >
                <div className="ninjadash-top-dropdown-menu">
                    <ul className="ninjadash-top-dropdown__nav">
                        {chamados.length > 0 ? (
                            chamados.map((chamado, index) => (
                                <li key={index}>
                                    <Link to="#">
                                        <figure className="ninjadash-top-dropdown__content">
                                            <img src={chamado.image} alt={chamado.empresa} />
                                            <figcaption>
                                                <Heading as="h5">
                                                    {chamado.title} - {chamado.empresa}
                                                </Heading>
                                                <div>
                                                    <span className="ninjadash-top-dropdownText">
                                                        {chamado.content}
                                                    </span>
                                                    <div>
                                                        <Badge className="badge-priority" count={chamado.prioridade} />
                                                        <Badge className="badge-status" count={chamado.status} />
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li>
                                <div className="ninjadash-top-dropdown__content notifications">
                                    <div className="notification-content d-flex">
                                        <div className="notification-text">
                                            <Heading as="h5">Sem chamados</Heading>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </Scrollbars>
            <Link className="btn-seeAll" to="#">
                See all messages
            </Link>
        </UserActionDropDown>
    );

    return (
        <div className="ninjadash-nav-actions__item ninjadash-nav-actions__message">
            <Popover placement="bottomLeft" content={content} action="click">
                <Badge dot offset={[-8, -5]}>
                    <Link to="#" className="ninjadash-nav-action-link">
                        <ReactSVG src={require('../../../static/img/icon/envelope.svg').default} />
                    </Link>
                </Badge>
            </Popover>
        </div>
    );
}

MessageBox.propTypes = {
    rtl: PropTypes.bool,
};

export default MessageBox;
