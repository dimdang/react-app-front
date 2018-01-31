import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductsList from '../conponents/product-list';
import { fetchProducts } from '../actions/product-actions';

class ProductPage extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
             <div>
                <h1>List of Contacts</h1>
                <ProductsList products={this.props.products}/>
             </div>
        )
    }
}

function mapStateToProps(state) {
    const { products, pagination } = state.productStore;
    console.log("state -- :", state.productStore);
    return { products, pagination };
}

export default connect(mapStateToProps, {fetchProducts})(ProductPage);