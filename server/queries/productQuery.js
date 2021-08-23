import { db } from "../db.js";

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.execute("SELECT * FROM product order by id desc", (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

export const getAProduct = (productId) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "select * From product where id =?",
      [productId],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};

export const getProductImgs = (productId) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "select * From images where product_id = ?",
      [productId],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};

export const getCartId = (userId) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select id from cart where user_id = ?",
      [userId],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};

export const getCartItemInfo = (res, productIds) => {
  return db.query(
    "select * from product where id In (?)",
    [productIds],
    (err, result) => {
      if (err) {
        return console.log(err);
      }
      res.send(result);
    }
  );
};

export const checkDuplicateItem = (cartId, productId) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select exists(select * from cart_item where cart_id=? and product_id=?) ",
      [cartId, productId],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};

// export const bring

export const deleteItem = (targetId) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "delete from cart_item where id = ?",
      [targetId],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};

export const insertOrderItem = (
  order_id,
  product_id,
  quantity,
  price,
  product_name
) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "Insert into order_item (order_id, product_id, quantity, price, product_name) values(?,?,?,?,?)",
      [order_id, product_id, quantity, price, product_name],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};

export const getOrderInfo = (orderId, userId) => {
  return new Promise((resolve, reject) => {
    if (orderId && !userId) {
      db.execute(
        "select * from orders where id = ?",
        [orderId],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    } else {
      db.execute(
        "select * from orders where user_id = ?",
        [userId],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    }
  });
};

export const getOrderItems = (orderId) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "select * from order_item where order_id = ?",
      [orderId],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};
