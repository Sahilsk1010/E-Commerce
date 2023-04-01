
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            
            state.quantity = state.quantity + 1;
            state.products.push(action.payload);
            state.total = state.total + action.payload.price*(action.payload.quantity) ;
        },
        decreaseQuantity:(state,action)=>{
            const qqut = state.products[action.payload].quantity;
            state.products[action.payload].quantity -= 1;
            if(state.products[action.payload].quantity === 0){
                state.products.splice(action.payload,1);
            }
        },
        updateprice:(state,action)=>{
            const price = action.payload;
            console.log(price);
            state.total -= price;
        },
        increaseQuantity:(state,action)=>{
            const qqut = state.products[action.payload].quantity;
            state.products[action.payload].quantity += 1;
            
        },
        updatepricei:(state,action)=>{
            const price = action.payload;
            console.log(price);
            state.total += price;
        },
        
              
    }
});
        



export const {addProduct,deleteproduct,decreaseQuantity,updateprice,increaseQuantity,updatepricei,delecart} = cartSlice.actions;

export default cartSlice.reducer;