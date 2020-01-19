import React from 'react';
import Menu from './MenuComponent';
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component{

    constructor(props)
    {
        super(props)
        {
            this.state = {
              dishes:  DISHES 
            };
        }
    }
    
    render()
    {
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };
        const HomePage = () => {
            return(
                <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
            );
          }
        return (
            <div className="App">
                <Header /> 
                 <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
              <Route exact path='/contactus' component={Contact} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              </Switch>
                <Footer />
              </div>
          );
    }
}
export default Main;