// REMOVE_ITEM
export const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

// LOANDING
export const LOANDING = "LOADING";

export const loading = () => {
  return {
    type: "LOADING"
  };
};

// FETCH_PHONES
export const FETCH_PHONES = "FETCH_PHONES";

// Servers Response Simulation
export const fetchPhones = () => {
  return {
    type: FETCH_PHONES,
    phones: [
      {
        id: 1,
        title: "Google Pixel - Black",
        img: "/imgs/product-1.png",
        price: 10,
        company: "GOOGLE",
        count: 0,
        total: 0
      },
      {
        id: 2,
        title: "Samsung S7",
        img: "/imgs//product-2.png",
        price: 16,
        company: "SAMSUNG",
        count: 0,
        total: 0
      },
      {
        id: 3,
        title: "HTC 10 - Black",
        img: "/imgs/product-3.png",
        price: 8,
        company: "htc",
        count: 0,
        total: 0
      },
      {
        id: 4,
        title: "HTC 10 - White",
        img: "/imgs/product-4.png",
        price: 18,
        company: "htc",
        count: 0,
        total: 0
      },
      {
        id: 5,
        title: "HTC Desire 626s",
        img: "/imgs/product-5.png",
        price: 24,
        company: "htc",
        count: 0,
        total: 0
      },
      {
        id: 6,
        title: "Vintage Iphone",
        img: "/imgs/product-6.png",
        price: 17,
        company: "apple",
        count: 0,
        total: 0
      },
      {
        id: 7,
        title: "Iphone 7",
        img: "/imgs/product-7.png",
        price: 30,
        company: "apple",
        count: 0,
        total: 0
      },
      {
        id: 8,
        title: "Smashed Iphone",
        img: "/imgs//product-8.png",
        price: 2,
        company: "apple",
        count: 0,
        total: 0
      }
    ]
  };
};

export const getAllPhones = () => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(fetchPhones());
    }, 3000);
  };
};

// ADD_ITEM
export const ADD_ONE_ITEM = "ADD_ONE_ITEM";

export const addOneItem = id => {
  return {
    type: ADD_ONE_ITEM,
    id
  };
};

// REMOVE_ITEM
export const REMOVE_ONE_ITEM = "REMOVE_ONE_ITEM";

export const removeOneItem = id => {
  return {
    type: REMOVE_ONE_ITEM,
    id
  };
};
