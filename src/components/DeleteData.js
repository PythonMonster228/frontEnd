import axios from "axios";
import { useState } from "react";

function DeleteData(){
        const body = JSON.stringify({title, price})
        axios.delete('https://6558ec89e93ca47020a9e4ff.mockapi.io/products', {
            title, price
        })
    };

export default PostData;