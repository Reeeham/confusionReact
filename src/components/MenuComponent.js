import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

/////////////   it turned into purely functional component   //////


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
      function RenderMenuItem({dish,onClick})
      {
          return (
            <Card 
            onClick={() => props.onClick(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
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
                    {menu}
                </div>
                
            </div>
        );
     
      }
        
        
    //}
//}

export default Menu;