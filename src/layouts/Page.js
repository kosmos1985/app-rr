import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsListPage from '../pages/ProductsListPage';
import ProductPage from '../pages/ProductPage';
import KontaktPage from '../pages/KontaktPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';

const Page = () => {
    return (
        <>
        <Switch>
       <Route path="/" exact component={HomePage}/>
       <Route path="/products"  component={ProductsListPage}/>
       <Route path="/product/:id"  component={ProductPage}/>
       <Route path="/contact"  component={KontaktPage}/>
       <Route path="/admin"  component={AdminPage}/>
       <Route path="/login"  component={LoginPage}/>
       <Route  component={ErrorPage}/>
      </Switch>
       </>
    );
}

export default Page;