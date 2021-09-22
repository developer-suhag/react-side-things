// use localStroage as  database now

const checkDb = () => localStorage.getItem("manus_cart");

const updateDb = (cart) => {
  localStorage.setItem("manus_cart", JSON.stringify(cart));
};

const addToDb = (id) => {
  const exist = checkDb();
  let manus_cart = {};
  if (!exist) {
    manus_cart[id] = 1;
  } else {
    manus_cart = JSON.parse(exist);
    if (manus_cart[id]) {
      const newCount = manus_cart[id] + 1;
      manus_cart[id] = newCount;
    } else {
      manus_cart[id] = 1;
    }
  }
  updateDb(manus_cart);
};

const deleteFromDb = (id) => {
  const exist = checkDb();
  if (exist) {
    const manus_cart = JSON.parse(exist);
    delete manus_cart[id];
    updateDb(manus_cart);
  }
};

export { addToDb, deleteFromDb };
