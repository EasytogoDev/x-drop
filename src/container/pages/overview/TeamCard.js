import React from 'react';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { UserCard } from '../style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';

function TeamCard({ user, actions }) {
  const { nome, email, foto } = user;

  return (
    <UserCard>
      <div className="card team-card">
        <Cards headless>
          <figure>
            <img src={foto.replace('//imagens', '/imagens')} alt={nome} />
            <figcaption>
              <div className="edit">
                <Dropdown content={actions} action={['click']} className="wide-dropdwon">
                  <Link className="card__more_actions" to="">
                    <UilEllipsisH />
                  </Link>
                </Dropdown>
              </div>
              <Heading className="card__name" as="h6">
                <Link to="#">{nome}</Link>
              </Heading>
              <span className="card__designation">{email}</span>
              <div className="card__social">
                <Link className="btn-icon facebook" to="#">
                  <FontAwesome name="facebook" />
                </Link>
                <Link className="btn-icon twitter" to="#">
                  <FontAwesome name="twitter" />
                </Link>
                <Link className="btn-icon dribble" to="#">
                  <FontAwesome name="dribbble" />
                </Link>
                <Link className="btn-icon instagram" to="#">
                  <FontAwesome name="instagram" />
                </Link>
              </div>
            </figcaption>
          </figure>
        </Cards>
      </div>
    </UserCard>
  );
}

TeamCard.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.node,
};

export default TeamCard;
