import { useNavigate } from "react-router-dom";
import AddProductForm from "../components/product/AddProductForm";
function AddProduct() {
    const navigate = useNavigate();

    function addProductHandler(newProduct) {
        fetch("http://localhost:3002/product", {
            method:"POST",
            body: JSON.stringify(newProduct),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response=>navigate("/",{replace:true}))
        .catch(err=>console.log(err));

    }
    return <AddProductForm addProductHandler={addProductHandler} />
}

export default AddProduct;