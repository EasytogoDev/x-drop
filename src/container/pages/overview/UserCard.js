/* eslint-disable prettier/prettier */
// import React from 'react';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
// import UilUserPlus from '@iconscout/react-unicons/icons/uil-user-plus';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import React from 'react';
import { UserCard } from '../style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

function UserCards({ user }) {
  const { name, designation, img } = user;
  return (
    <UserCard>
      <div className="card user-card">
        <Cards headless>
          <figure>
            <img src={require(`../../../${img}`)} alt="" />
          </figure>
          {/* <Image 
            source={{ uri: 'https://github.com/ViniAguiar1.png'}}
            width={200}
            height={200}
          /> */}
          <figcaption>
            <div className="card__content">
              <Heading className="card__name" as="h6">
                <Link to="#">{name}</Link>
              </Heading>
              <p className="card__designation">{designation}</p>
            </div>

            <div className="card__actions">
              <Button size="default" type="white">
                <UilEnvelope />
                Mensagem
              </Button>
              {/* <Button size="default" type="white">
                <UilUserPlus />
                Segui
              </Button> */}
            </div>
            <div className="card__info">
              <Row gutter={15}>
                <Col xs={8}>
                  <div className="info-single">
                    <Heading className="info-single__title" as="h2">
                      $72,572
                    </Heading>
                    <p>Vendas</p>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="info-single">
                    <Heading className="info-single__title" as="h2">
                      3,257
                    </Heading>
                    <p>Pedidos</p>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="info-single">
                    <Heading className="info-single__title" as="h2">
                      74
                    </Heading>
                    <p>Produtos</p>
                  </div>
                </Col>
              </Row>
            </div>
          </figcaption>
        </Cards>
      </div>
    </UserCard>
  );
}

UserCards.propTypes = {
  user: PropTypes.object,
};

export default UserCards;
