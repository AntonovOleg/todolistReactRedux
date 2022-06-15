import {
  apiGetAll,
  apiModify,
  apiDelete,
  apiCreate,
  apiDeleteAll,
  apiCompleteAll,
} from '../../services/services';

export const createItemAction = (text, flag) => {
  return {
    type: 'Create',
    payload: {
      id: Math.random(),
      text,
      flag,
    },
  };
};

export const getItems = (data) => {
  return {
    type: 'GetItems',
    payload: data,
  };
};

export const deleteItemAction = (id) => {
  return {
    type: 'Delete',
    payload: id,
  };
};

export const modifyItemAction = (id, text, flag) => {
  return {
    type: 'Modify',
    payload: {
      id,
      text,
      flag,
    },
  };
};

export const filterAll = () => {
  return {
    type: 'All',
  };
};

export const filterActive = () => {
  return {
    type: 'Active',
  };
};

export const filterCompleted = () => {
  return {
    type: 'Completed',
  };
};

export const getItemsThunk = () => (dispatch) => {
  return apiGetAll().then((data) => dispatch(getItems(data)));
};

export const changeFlag = (id, text, flag) => {
  return (dispatch) => {
    apiModify(id, text, !flag)
      .then(() => {
        dispatch(modifyItemAction(id, text, flag));
      })
      .then(() => dispatch(getItemsThunk()));
  };
};

export const changeText = (id, text, flag) => {
  return (dispatch) => {
    dispatch(modifyItemAction(id, text, flag));
    apiModify(id, text, flag).then(() => dispatch(getItemsThunk()));
  };
};

export const deleteItem = (id, filter) => {
  return (dispatch) => {
    apiDelete(id)
      .then(() => {
        dispatch(deleteItemAction(id));
      })
      .then(() => dispatch(getItemsThunk(filter)));
  };
};

export const createItemThunk = (text) => {
  return (dispatch) => {
    return apiCreate(text).then(() => dispatch(getItemsThunk()));
  };
};

export const deleteAllThunk = () => {
  return (dispatch) => {
    return apiDeleteAll().then(() => dispatch(getItemsThunk()));
  };
};

export const completeAllThunk = () => {
  return (dispatch) => {
    return apiCompleteAll().then(() => dispatch(getItemsThunk()));
  };
};
