import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from '../redux/dishes';
import { Comments } from '../redux/comments';
import { Promotions } from '../redux/promotions';
import { Leaders } from '../redux/leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import { InitialFeedback } from './forms';
export const ConfigureStore = () => 
{
    const store = createStore(
       combineReducers(
           {
               dishes: Dishes,
               comments: Comments,
               promotions: Promotions,
               leaders: Leaders,
               ...createForms({
                   feedback: InitialFeedback
               })
           }),
           applyMiddleware(thunk, logger)
    );
    return store;
}