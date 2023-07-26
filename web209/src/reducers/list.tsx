import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { Dispatch } from "react";
import { addProduct, deleteProduct, fetchProduct, updateProduct } from "@/action/product";
const List = ()=>{
    const dispatch:Dispatch<any>=useDispatch();
    const {products}=useSelector((state:any)=>state.products)
    useEffect(()=>{
        dispatch(fetchProduct())
    },[])
    return(
        <div>
            {products?.map((item:any)=>{
                return <div key={item.id}>{item.name}
                   
                </div>
            })}
            <button onClick={()=>dispatch(addProduct({name:"test"}))}>add</button>
            <button onClick={()=>dispatch(updateProduct({name:"updae",id:1}))}>up </button>
            <button onClick={()=> dispatch(deleteProduct(3))}>delete</button>
        </div>
    )
}
export default List