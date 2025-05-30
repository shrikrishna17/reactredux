import { ActionTypes } from "../constants/action-types"


export const SetProducts = (products) => {
  return {
    type : ActionTypes.SET_PRODUCTS,
    payload : products,
  };
};

export const SelectedProduct = (product) => {
  return {
    type : ActionTypes.SELECTED_PRODUCT,
    payload : product,
  };
};

export const RemovaSelectedProduct = () => {
  return {
    type : ActionTypes.REMOVE_SELECTED_PRODUCT
  };
};