import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';

import ItemCard from './ItemCard';

import './ItemList.css';

class ItemList extends Component {
  static propTypes = {
    cart: PropTypes.array,
  };

  render() {
    return (
      <div className="item-list">
        {isLoaded(this.props.cart) && !isEmpty(this.props.cart) ? (
          this.props.cart.map(item => (
            <ItemCard
              key={item.id}
              name={item.name}
              image={item.picture}
              category={item.category}
              description={item.description}
            />
          ))
        ) : (
          <div>Loading cart data ...</div>
        )}
      </div>
    );
  }
}

export default compose(
  firestoreConnect([
    {
      collection: 'cart',
      orderBy: ['created', 'desc'],
    },
  ]),
  connect((state, props) => ({
    cart: state.firestore.ordered.cart,
  }))
)(ItemList);
