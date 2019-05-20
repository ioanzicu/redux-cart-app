import React, { Component } from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removeItem,
  getAllPhones,
  addOneItem,
  removeOneItem
} from "../actions";

class Cart extends Component {
  componentDidMount() {
    this.props.getAllPhones();
  }

  render() {
    const {
      phones,
      removeFromCart,
      onAddItem,
      onRemoveItem,
      loading
    } = this.props;

    function calculateTotal(items) {
      return items.reduce((accumulator, item) => {
        return (accumulator += item.price * (item.count + 1));
      }, 0);
    }

    // console.log("loading", loading);
    return (
      <div className="list-phones">
        <div className="text-center title">
          <h1>
            Welcome To The White Wolf's{" "}
            <i className="fab fa-wolf-pack-battalion" /> Phones Cart App!!!
          </h1>
          <h2>
            The best deals are waiting for you ...
            <i className="fas fa-shopping-cart" />
          </h2>
        </div>
        <br />
        {loading && (
          <div>
            {/* //className="loading text-center"> */}
            <ReactLoading
              className="loading text-center"
              type="spokes"
              color="#2c97b8"
              height={75}
              width={75}
            />
          </div>
        )}
        {phones && phones.length > 0 ? (
          <ol className="phone-list">
            {phones.map(phone => (
              <li key={phone.id} className="phone-list-item">
                <div
                  className="phone-img"
                  style={{
                    backgroundImage: `url(${phone.img})`
                  }}
                />
                <div className="phone-details">
                  <p>{phone.title}</p>
                </div>
                <div className="phone-details">
                  <p>Made By: </p>
                  <p>
                    <b>{phone.company.toUpperCase()}</b>
                  </p>
                </div>
                <div className="phone-details">
                  <p>Price: </p>
                  <p>$ {phone.count >= 1 ? phone.total : phone.price}</p>
                </div>
                <div className="phone-details">
                  <p>Amount: </p>
                  <button onClick={() => onAddItem(phone.id)}> + </button>
                  <p>{phone.count + 1}</p>
                  <button
                    onClick={
                      phone.count >= 1
                        ? () => onRemoveItem(phone.id)
                        : () => removeFromCart(phone.id)
                    }
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(phone.id)}
                  className="phone-remove"
                >
                  <i className="fas fa-trash-alt black" />
                  Remove
                </button>
              </li>
            ))}
            <h1 className="text-center">Total: $ {calculateTotal(phones)}</h1>
          </ol>
        ) : (
          <h1 className="text-center">
            The Cart is Empty :(
            <br />
            Refresh the Page and wait 3 Seconds!!!
          </h1>
        )}
        <br />
        <footer>
          <b>
            All rights reserved. &copy; Ioan Zicu{" "}
            <i className="fab fa-wolf-pack-battalion" />
          </b>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { phones, loading } = state;
  return { phones, loading };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: id => dispatch(removeItem(id)),
    getAllPhones: bindActionCreators(getAllPhones, dispatch),
    onAddItem: id => dispatch(addOneItem(id)),
    onRemoveItem: id => dispatch(removeOneItem(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
