// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

//
// Product Slice (static data, no reducers)
//
const productSlice = createSlice({
  name: "products",
  initialState: {
    veg: [
      { id: "veg-1", name: "Paneer Butter Masala", price: 60, image: "public/images/Paneer Butter Masala.png", description: "Rich and creamy curry made with paneer cubes simmered in tomato-based gravy." },
      { id: "veg-2", name: "Veg Biryani", price: 63, image: "/images/Veg Biryani.png", description: "Fragrant rice cooked with fresh vegetables and aromatic spices." },
      { id: "veg-3", name: "Chole Bhature", price: 50, image: "/images/Chole Bhature.png", description: "Spicy chickpea curry served with fluffy fried bhature." },
      { id: "veg-4", name: "Veg Fried Rice", price: 55, image: "/images/Veg Fried Rice.png", description: "Chinese-style fried rice with fresh seasonal vegetables." },
      { id: "veg-5", name: "Masala Dosa", price: 42, image: "/images/Masala Dosa.png", description: "Crispy dosa stuffed with spicy potato filling, served with chutney and sambar." },
      { id: "veg-6", name: "Palak Paneer", price: 71, image: "/images/Palak Paneer.png", description: "Healthy spinach curry with paneer cubes, rich in iron and protein." },
      { id: "veg-7", name: "Veg Manchurian", price: 58, image: "/images/Veg Manchurian.png", description: "Crispy vegetable balls cooked in a tangy Indo-Chinese gravy." },
      { id: "veg-8", name: "Aloo Paratha", price: 37, image: "/images/Aloo Paratha.png", description: "Stuffed flatbread with spiced potato filling, served with curd and pickle." },
      { id: "veg-9", name: "Veg Pulao", price: 55, image: "/images/Veg Pulao.png", description: "Delicious rice dish with vegetables and aromatic spices." },
      { id: "veg-10", name: "Paneer Tikka", price: 67, image: "/images/Paneer Tikka.png", description: "Smoky and flavorful paneer chunks marinated in spices and grilled to perfection." },
      { id: "veg-11", name: "Dal Tadka", price: 47, image: "/images/Dal Tadka.png", description: "Yellow lentils cooked with ghee, spices, and tempered with garlic." },
      { id: "veg-12", name: "Rajma Chawal", price: 58, image: "/images/Rajma Chawal.png", description: "Red kidney beans curry served with steamed rice." },
      { id: "veg-13", name: "Stuffed Capsicum", price: 63, image: "/images/Stuffed Capsicum.png", description: "Bell peppers stuffed with spicy vegetable mix and baked." },
      { id: "veg-14", name: "Matar Paneer", price: 71, image: "/images/Matar Paneer.png", description: "Paneer cubes cooked in tomato-based gravy with green peas." },
      { id: "veg-15", name: "Onion Uttapam", price: 37, image: "/images/Onion Uttapam.png", description: "Soft dosa base topped with onions and chilies." },
      { id: "veg-16", name: "Kadai Paneer", price: 76, image: "/images/Kadai Paneer.png", description: "Paneer cubes stir-fried with bell peppers in spicy kadai gravy." },
      { id: "veg-17", name: "Vegetable Pakora", price: 34, image: "/images/Vegetable Pakora.png", description: "Crispy deep-fried fritters made with mixed vegetables." },
      { id: "veg-18", name: "Bhindi Masala", price: 50, image: "/images/Bhindi Masala.png", description: "Stir-fried ladyfinger with onions, tomatoes, and spices." },
    ],
    nonveg: [
      { id: "nonveg-1", name: "Butter Chicken", price: 92, image: "/images/Butter Chicken.png", description: "Tender chicken cooked in a rich, buttery tomato-based gravy." },
      { id: "nonveg-2", name: "Chicken Biryani", price: 75, image: "/images/Chicken Biryani.png", description: "Aromatic rice layered with marinated chicken and spices." },
      { id: "nonveg-3", name: "Mutton Curry", price: 105, image: "/images/Mutton Curry.png", description: "Slow-cooked mutton pieces in a spicy, flavorful curry." },
      { id: "nonveg-4", name: "Fish Curry", price: 97, image: "/images/Fish Curry.png", description: "Tangy and spicy curry made with fresh fish and coastal spices." },
      { id: "nonveg-5", name: "Prawns Masala", price: 100, image: "/images/Prawns Masala.png", description: "Juicy prawns cooked in a spicy onion-tomato masala." },
      { id: "nonveg-6", name: "Chicken 65", price: 76, image: "/images/Chicken 65.png", description: "Spicy and crispy deep-fried chicken starter." },
      { id: "nonveg-7", name: "Mutton Kebab", price: 109, image: "/images/Mutton Kebab.png", description: "Juicy minced mutton kebabs grilled to perfection." },
      { id: "nonveg-8", name: "Fish Fry", price: 89, image: "/images/Fish Fry.png", description: "Crispy fried fish marinated with South Indian spices." },
      { id: "nonveg-9", name: "Chicken Pakora", price: 63, image: "/images/Chicken Pakora.png", description: "Deep-fried chicken fritters coated with spices and gram flour." },
      { id: "nonveg-10", name: "Tandoori Chicken", price: 92, image: "/images/Tandoori Chicken.png", description: "Charcoal-grilled chicken marinated in yogurt and spices." },
      { id: "nonveg-11", name: "Chicken Lollipop", price: 67, image: "/images/Chicken Lollipop.png", description: "Crispy fried chicken wings coated with tangy sauce." },
      { id: "nonveg-12", name: "Chicken Curry", price: 79, image: "/images/Chicken Curry.png", description: "Classic Indian chicken curry cooked with onions and tomatoes." },
      { id: "nonveg-13", name: "Mutton Biryani", price: 109, image: "/images/Mutton Biryani.png", description: "Flavored rice layered with juicy mutton pieces and spices." },
      { id: "nonveg-14", name: "Crab Curry", price: 117, image: "/images/Crab Curry.png", description: "Spicy crab curry cooked in coastal masala style." },
      { id: "nonveg-15", name: "Prawn Biryani", price: 112, image: "/images/Prawn Biryani.png", description: "Aromatic rice layered with spicy prawns masala." },
      { id: "nonveg-16", name: "Egg Curry", price: 58, image: "/images/Egg Curry.png", description: "Boiled eggs cooked in a spicy onion-tomato gravy." },
      { id: "nonveg-17", name: "Fish Biryani", price: 100, image: "/images/Fish Biryani.png", description: "Fragrant rice layered with fish pieces cooked in spices." },
      { id: "nonveg-18", name: "Chicken Shawarma", price: 63, image: "/images/Chicken Shawarma.png", description: "Middle-Eastern style roll stuffed with chicken and sauces." },
    ],
    drinks: [
      { id: "drink-1", name: "Coca Cola", price: 17, image: "/images/Coca Cola.png", description: "Chilled soft drink to refresh your mood." },
      { id: "drink-2", name: "Pepsi", price: 17, image: "/images/Pepsi.png", description: "Cool and fizzy Pepsi, perfect for parties." },
      { id: "drink-3", name: "Mango Juice", price: 25, image: "/images/Mango Juice.png", description: "Fresh mango juice with rich flavor." },
      { id: "drink-4", name: "Lemon Soda", price: 13, image: "/images/Lemon Soda.png", description: "Refreshing soda with tangy lemon taste." },
      { id: "drink-5", name: "Orange Juice", price: 21, image: "/images/Orange Juice.png", description: "Freshly squeezed orange juice full of vitamin C." },
      { id: "drink-6", name: "Apple Juice", price: 25, image: "/images/Apple Juice.png", description: "Natural apple juice without preservatives." },
      { id: "drink-7", name: "Sprite", price: 17, image: "/images/Sprite.png", description: "Crisp lemon-lime flavored soft drink." },
      { id: "drink-8", name: "Fanta", price: 17, image: "/images/Fanta.png", description: "Tangy and bubbly orange-flavored soft drink." },
      { id: "drink-9", name: "Cold Coffee", price: 29, image: "/images/Cold Coffee.png", description: "Chilled coffee served with milk and ice." },
      { id: "drink-10", name: "Buttermilk", price: 13, image: "/images/Buttermilk.png", description: "Cool and digestive spiced buttermilk." },
      { id: "drink-11", name: "Red Bull", price: 42, image: "/images/Red Bull.png", description: "Boost your energy instantly with caffeine kick." },
      { id: "drink-12", name: "Pineapple Juice", price: 25, image: "/images/Pineapple Juice.png", description: "Refreshing tropical pineapple juice." },
      { id: "drink-13", name: "Watermelon Juice", price: 21, image: "/images/Watermelon Juice.png", description: "Hydrating and fresh juice made from watermelon." },
      { id: "drink-14", name: "Tender Coconut", price: 17, image: "/images/Tender Coconut.png", description: "Natural tender coconut water for hydration." },
      { id: "drink-15", name: "Iced Tea", price: 29, image: "/images/Iced Tea.png", description: "Chilled tea with lemon flavor." },
      { id: "drink-16", name: "Masala Soda", price: 17, image: "/images/Masala Soda.png", description: "Tangy and spicy soda drink." },
      { id: "drink-17", name: "Milk Soda", price: 16, image: "/images/Milk Soda.png", description: "Unique soda made with chilled milk and fizz." },
      { id: "drink-18", name: "Ginger Ale", price: 34, image: "/images/Ginger Ale.png", description: "Carbonated soft drink with ginger flavor." },
    ],
    milk: [
      { id: "milk-1", name: "Milkshake", price: 50, image: "/images/Milkshake.png", description: "Thick and creamy milkshake available in chocolate, vanilla, and strawberry flavors." },
      { id: "milk-2", name: "Lassi", price: 34, image: "/images/Lassi.png", description: "Refreshing yogurt-based milk drink, sweet or salted." },
      { id: "milk-3", name: "Badam Milk", price: 37, image: "/images/Badam Milk.png", description: "Flavored milk enriched with almonds and cardamom." },
      { id: "milk-4", name: "Hot Chocolate", price: 47, image: "/images/Hot Chocolate.png", description: "Rich hot drink made with melted chocolate and milk." },
      { id: "milk-5", name: "Cold Coffee with Ice Cream", price: 55, image: "/images/Cold Coffee with Ice Cream.png", description: "Chilled coffee topped with vanilla ice cream." },
      { id: "milk-6", name: "Rose Milk", price: 20, image: "/images/Rose Milk.png", description: "Refreshing milk flavored with rose syrup." },
      { id: "milk-7", name: "Masala Milk", price: 42, image: "/images/Masala Milk.png", description: "Warm milk flavored with saffron and spices." },
      { id: "milk-8", name: "Banana Shake", price: 37, image: "/images/Banana Shake.png", description: "Healthy banana blended with milk." },
      { id: "milk-9", name: "Strawberry Shake", price: 42, image: "/images/Strawberry Shake.png", description: "Sweet strawberry blended with chilled milk." },
      { id: "milk-10", name: "Oreo Shake", price: 50, image: "/images/Oreo Shake.png", description: "Delicious shake made with Oreo biscuits and milk." },
      { id: "milk-11", name: "Vanilla Shake", price: 47, image: "/images/Vanilla Shake.png", description: "Classic milkshake with vanilla flavor." },
      { id: "milk-12", name: "Chocolate Shake", price: 50, image: "/images/Chocolate Shake.png", description: "Thick milkshake blended with chocolate syrup." },
      { id: "milk-13", name: "Mango Lassi", price: 37, image: "/images/Mango Lassi.png", description: "Sweet lassi blended with fresh mango pulp." },
      { id: "milk-14", name: "Pista Milk", price: 40, image: "/images/Pista Milk.png", description: "Milk flavored with pistachios and saffron." },
      { id: "milk-15", name: "Fruit Custard", price: 55, image: "/images/Fruit Custard.png", description: "Chilled custard mixed with seasonal fruits." },
      { id: "milk-16", name: "Falooda", price: 58, image: "/images/Falooda.png", description: "Layered milk dessert with vermicelli, rose syrup, and ice cream." },
      { id: "milk-17", name: "Caramel Shake", price: 54, image: "/images/Caramel Shake.png", description: "Sweet and creamy caramel flavored shake." },
      { id: "milk-18", name: "Nutella Shake", price: 63, image: "/images/Nutella Shake.png", description: "Delicious shake made with Nutella and milk." },
    ],
    chocolate: [
      { id: "choco-1", name: "Chocolate Cake Slice", price: 40, image: "/images/Chocolate Cake Slice.png", description: "A rich and moist slice of classic chocolate cake." },
      { id: "choco-2", name: "Chocolate Brownie with Ice Cream", price: 63, image: "/images/Chocolate Brownie with Ice Cream.png", description: "Warm chocolate brownie served with a scoop of vanilla ice cream." },
      { id: "choco-3", name: "Dark Chocolate Bar", price: 34, image: "/images/Dark Chocolate Bar.png", description: "Premium dark chocolate bar with intense cocoa flavor." },
      { id: "choco-4", name: "Milk Chocolate Bar", price: 29, image: "/images/Milk Chocolate Bar.png", description: "Smooth and creamy milk chocolate bar loved by all ages." },
      { id: "choco-5", name: "White Chocolate Bar", price: 29, image: "/images/White Chocolate Bar.png", description: "Deliciously sweet and creamy white chocolate bar." },
      { id: "choco-6", name: "Chocolate Donut", price: 37, image: "/images/Chocolate Donut.png", description: "Soft donut coated with rich chocolate glaze." },
      { id: "choco-7", name: "Chocolate Muffin", price: 42, image: "/images/Chocolate Muffin.png", description: "Moist muffin filled with gooey chocolate chips." },
      { id: "choco-8", name: "Chocolate Truffle", price: 55, image: "/images/Chocolate Truffle.png", description: "Decadent chocolate truffles dusted with cocoa powder." },
      { id: "choco-9", name: "Chocolate Ice Cream", price: 40, image: "/images/Chocolate Ice Cream.png", description: "Classic chocolate ice cream made from real cocoa." },
      { id: "choco-10", name: "Chocolate Milkshake", price: 58, image: "/images/Chocolate Milkshake.png", description: "Thick and creamy milkshake blended with chocolate syrup." },
      { id: "choco-11", name: "Hot Chocolate", price: 50, image: "/images/Hot Chocolate.png", description: "Warm drink made with melted chocolate and milk." },
      { id: "choco-12", name: "Chocolate Pastry", price: 42, image: "/images/Chocolate Pastry.png", description: "Soft pastry layered with chocolate cream." },
      { id: "choco-13", name: "Chocolate Fudge", price: 55, image: "/images/Chocolate Fudge.png", description: "Rich, chewy chocolate fudge squares." },
      { id: "choco-14", name: "Chocolate Pudding", price: 47, image: "/images/Chocolate Pudding.png", description: "Silky smooth chocolate pudding served chilled." },
      { id: "choco-15", name: "Chocolate Tart", price: 63, image: "/images/Chocolate Tart.png", description: "Crispy tart filled with rich chocolate ganache." },
      { id: "choco-16", name: "Chocolate Cupcake", price: 32, image: "/images/Chocolate Cupcake.png", description: "Soft chocolate cupcake topped with frosting." },
      { id: "choco-17", name: "Chocolate Mousse", price: 47, image: "/images/Chocolate Mousse.png", description: "Light and airy dessert made with whipped chocolate cream." },
      { id: "choco-18", name: "Nutella Brownie", price: 58, image: "/images/Nutella Brownie.png", description: "Delicious chocolate brownie baked with Nutella swirl." },
    ],
  },
  reducers: {}
});

//
// Cart Slice
//
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return state.filter((i) => i.id !== action.payload.id);
        }
      }
    },
    removeItem: (state, action) => {
      return state.filter((i) => i.id !== action.payload.id);
    },
    clearCart: () => [],
    setCart: (state, action) => action.payload
  }
});

//
// Order Slice
//
const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      const newOrder = {
        orderId: `ORD-${Date.now()}`,
        date: new Date().toLocaleString(),
        ...action.payload
      };
      state.push(newOrder);
    },
    clearOrders: () => [],
    setOrders: (state, action) => action.payload
  }
});

//
// Signup/Auth Slice
//
const signupAuthenticated = createSlice({
  name: "signupAuthenticated",
  initialState: { users: [], isAuthenticated: false, currentUser: null },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    }
  }
});

// Export actions
export const { addToCart, removeFromCart, removeItem, clearCart, setCart } = cartSlice.actions;
export const { addOrder, clearOrders, setOrders } = orderSlice.actions;
export const { registerUser, loginUser, logoutUser } = signupAuthenticated.actions;

//
// LocalStorage Helpers
//
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state:", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      cart: state.cart,
      orders: state.orders,
      signupAuthenticated: state.signupAuthenticated
    });
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Error saving state:", err);
  }
};

//
// Store
//
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    orders: orderSlice.reducer,
    signupAuthenticated: signupAuthenticated.reducer
  },
  preloadedState
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
