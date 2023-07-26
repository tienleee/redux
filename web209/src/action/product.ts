import axios from "axios"
export const fetchProduct = ()=>async (dispatch:any)=>{
    try {
        const {data} =await axios.get("http://localhost:3000/products")
        dispatch({type:"product/fetchProducts",payload:data})
    } catch (error) {
        
    }finally{}
}
export const addProduct =(product:any)=> async (dispatch:any)=>{
    try {
        const {data} = await axios.post("http://localhost:3000/products",product)
        dispatch({type:"product/addProduct",payload:data})
    } catch (error) {
        
    }
}
export const updateProduct =(product:any)=> async (dispatch:any)=>{
    try {
        const {data} = await axios.put("http://localhost:3000/products/"+product.id,product)
        dispatch({type:"product/updateProduct",payload:data})
    } catch (error) {
        
    }
}
export const deleteProduct =(id:any)=> async (dispatch:any)=>{
    try {
        const {data} = await axios.post("http://localhost:3000/products/"+id)
        dispatch({type:"product/addProduct",payload:id})
    } catch (error) {
        
    }
}