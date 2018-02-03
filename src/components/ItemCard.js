import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <img src={this.props.image} className="product-image" alt="Product" />
          <h4 className="card-title">{this.props.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">
            {this.props.category}
          </h6>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default ItemCard;
