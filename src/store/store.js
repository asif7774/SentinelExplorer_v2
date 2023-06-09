import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import rootReducer from './reducer';

export const getInitalData = () => async (dispatch) => {
  try {
    let responseData = true;
    let skip = 0;
    let metadata = [];
    while (responseData) {
      const response = await axios
        .get(
          `https://api.explorer.sentinel.co/api/v1/nodes?limit=100&skip=${skip}&status=STATUS_ACTIVE`
        )
        .then((res) => {
          return res.data.result;
        });
      if (response == null) {
        responseData = false;
      } else {
        skip += 100;
        metadata = metadata.concat(response);
      }
    }
    // You're dispatching not only the metadata, but also setting isDataInitialized to true, to denote, that data has been loaded
    dispatch({type: 'DATA_INITIALIZED', metadata});
  } catch (error) {
    console.log(error);
  }
};

export const coinGeckoDataInt = () => async (dispatch) => {
  try {
    let coinGeckoData = await axios
      .get(
        'https://api.coingecko.com/api/v3/simple/price?ids=sentinel&vs_currencies=usd&include_24hr_change=true'
      )
      .then((res) => {
        return res.data.sentinel;
      });
    dispatch({type: 'CG_DATA_INITIALIZED', coinGeckoData});
  } catch (error) {
    console.log(error);
  }
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
