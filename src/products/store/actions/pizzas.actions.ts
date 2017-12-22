import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Product] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Product] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Product] Load Pizzas Success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// create Pizza
export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail';

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

// update Pizza
export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizza Success';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizza Fail';

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

// remove Pizza
export const REMOVE_PIZZA = '[Products] Remove Pizza';
export const REMOVE_PIZZA_SUCCESS = '[Products] Remove Pizza Success';
export const REMOVE_PIZZA_FAIL = '[Products] Remove Pizza Fail';

export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZA_FAIL;
  constructor(public payload: any) {}
}
export type PizzasActions =
  | LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaSuccess
  | CreatePizzaFail
  | UpdatePizza
  | UpdatePizzaSuccess
  | UpdatePizzaFail
  | RemovePizza
  | RemovePizzaSuccess
  | RemovePizzaFail;
