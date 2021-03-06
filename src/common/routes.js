import React, { Component, Fragment } from 'react'
import { Route } from 'react-router'
import Page from './hocs/Page'
import AutheticationPage from './hocs/AutheticationPage'
import ComponentsPage from '../pages/Components'
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import MessagesPage from '../pages/MessagesPage'
import FriendPage from '../pages/FriendPage'
import ProfilePage from '../pages/ProfilePage'
import PublicPage from '../pages/PublicPage'
import ShopHomePage from '../pages/ShopHomePage'
import ShopingPage from '../pages/ShopingPage'
import ProductPage from '../pages/ProductPage'
import AddProductPage from '../pages/AddProductPage'
import BlogPage from '../pages/BlogPage'
import BlogsPage from '../pages/BlogsPage'
import AddBlogPage from '../pages/AddBlogPage'
import YourGamePage from '../pages/YourGamePage'

function Authetication (Page, props = {}) {
  return <AutheticationPage Page={Page} {...props} />
}

export default class Root extends Component {
  render () {
    return (
      <Fragment>
        <Route exact path='/' component={Page(ShopHomePage)} />
        <Route path='/signup' component={Page(SignUpPage)} />
        <Route path='/login' component={Page(LoginPage)} />
        <Route path='/blogs' component={Page(BlogsPage)} />
        <Route path='/public' render={() => Authetication(PublicPage)} />
        <Route path='/room' render={() => Authetication(HomePage)} />
        <Route path='/friend' render={() => Authetication(FriendPage)} />
        <Route path='/blog-add' render={() => Authetication(AddBlogPage)} />
        <Route path='/message/:uid' render={(props) => Authetication(MessagesPage, props)} />
        <Route path='/sell' render={() => Authetication(AddProductPage)} />
        <Route path='/components' render={() => <ComponentsPage />} />
        <Route path='/my-games' render={() => Authetication(YourGamePage)} />
        <Route path='/shop' render={() => <ShopingPage />} />
        <Route path='/blog/:uid' render={(props) => <BlogPage {...props} />} />
        <Route path='/product/:uid' render={(props) => <ProductPage {...props} />} />
        <Route path='/profile/:uid' render={(props) => Authetication(ProfilePage, props)} />
      </Fragment>
    )
  }
}
