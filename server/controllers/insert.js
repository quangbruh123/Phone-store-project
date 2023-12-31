const Phone = require("../models/phone");
const User = require("../models/user");
const Order = require("../models/order");
const Brand = require("../models/brand");
const phoneJson = require("../data/phones.json");
const accountJson = require("../data/account.json");
const brandJson = require("../data/brand.json");
const asyncHandler = require("express-async-handler");
const createSlug = require("../utils/createSlug");
const insertPhones = asyncHandler(async (req, res) => {
  for (phone of phoneJson) {
    if (phone) {
      for (let key in phone.technicalSpecifications) {
        // Kiểm tra xem khóa có kết thúc bằng ':' hay không
        if (key.endsWith(":")) {
          // Nếu có, loại bỏ ký tự ':' ở cuối
          const newKey = key.slice(0, -1);
          // Tạo một cặp khóa mới và xóa cặp khóa cũ
          phone.technicalSpecifications[newKey] =
            phone.technicalSpecifications[key];
          delete phone.technicalSpecifications[key];
        }
      }
      await Phone.create({
        ...phone,
        slug: createSlug(phone.phoneName),
        price: parseInt(phone.price.replace(".", "")) * 1000,
        thumb: phone.imageLinks[0],
        imageLinks: phone.imageLinks.slice(1),
        quantity: Math.floor(Math.random() * 200) + 1,
        soldQuantity: Math.floor(Math.random() * 100) + 1,
      });
    }
  }

  return res.status(201).json("Inserted");
});

const insertAccount = asyncHandler(async (req, res) => {
  const listId = [];
  for (const account of accountJson) {
    const newAccount = await User.create(account);

    listId.push(newAccount._id);
  }
  return res.status(201).json(listId);
});

const insertOrder = asyncHandler(async (req, res) => {
  const allProduct = await Phone.find().skip(45).limit(2);

  const products = allProduct.map((el) => {
    return {
      productId: el._id,
      quantity: Math.floor(Math.random() * 3) + 1,
    };
  });

  let totalCost = 0;
  for (let i = 0; i < products.length; i++) {
    totalCost += allProduct[i].price * products[i].quantity;
  }

  const orders = Array.from({ length: 3 }, () => ({
    products,
    status: ["Rejected", "Pending", "Accepted"][
      Math.floor(Math.random() * 3) + 1
    ],
    total: totalCost,
    orderBy: "659576a1b22426eef1d528fb", // Replace with the actual user ID
  }));

  await Order.insertMany(orders);

  return res.status(201).json("oke");
});

const change = asyncHandler(async (req, res) => {
  const orders = await Order.updateMany(
    { status: "Processing" },
    { status: "Pending" },
    { new: true }
  );
  return res.status(204).json(orders);
});

const insertBrand = asyncHandler(async (req, res) => {
  for (const brand of brandJson) {
    await Brand.create({ name: brand });
  }
  return res.status(204).send();
});
module.exports = {
  insertPhones,
  insertAccount,
  insertOrder,
  change,
  insertBrand,
};
