
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ProductListPage from './pages/product-list-page';
import ProductForm from './pages/product-form-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Products
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/product/new">
            Add Product
          </NavLink>
        </div>
        <Route exact path="/" component={ProductListPage}/>
        <Route path="/contacts/new" component={ProductForm}/>
      </Container>
    );
  }
}

export default App;