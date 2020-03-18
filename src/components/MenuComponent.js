import React, { Component } from 'react';
import { Card, CardBody,CardImg,CardText, CardImgOverlay, Breadcrumb, BreadcrumbItem,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import DishDetail from './DishdetailComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

/////////////   it turned into purely functional component   //////
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
        console.log(this.selectedDish);
    }

    renderDish(dish) {
        if (dish != null)
            return(
               <DishDetail 
                 dish={dish}
                 comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(dish.id,10))}
                 addComment = {this.props.addComment}
        
                 />
                   
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        if(this.props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  
                        {this.renderDish(this.state.selectedDish)}
                     
                </div>
                </div>
            );
        }
       
    }
}

// class Menu extends Component {
/*     constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    } */
  //  render() {
    /* function RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="25%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
    
      //another way to implement functional component
      const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
              <div  key={dish.id} className="col-12 col-md-5 m-1">
               <RenderMenuItem dish = {dish} />
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
        
      }
         */
        
    //}
//}

export default Menu;