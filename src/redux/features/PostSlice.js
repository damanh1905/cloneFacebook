import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
    name:"post",
    initialState:{
        value:[],
    },
    reducers:{
        addPost:(state,action)=>{
            state.value.unshift(action.payload);
        },
        addAllPost:(state,action)=>{},
    },
});

export const {addPost,addAllPost} = PostSlice.actions;
export const selectPost = (state) =>state.post.value;
export default PostSlice.reducer;