import NavBar from "../components/Main/NavBar"
import Footer from "../components/Main/Footer"
import VideoBG from "../components/VideoBG"
import ProductDetails from "../components/Products/ProductDetails"
import Title from "../components/Title"
import SubTitle from "../components/SubTitle"
import RelatedProducts from "../components/Products/RelatedProducts"




const ProductDetail = (props) => {
    console.log(props);
    return (
        <div >
            <ProductDetails products = {props.products}/>
            <Title title="Coffee Story" alignment="center" />
            <VideoBG width="50%" height="50vh" />
            <SubTitle />
            <RelatedProducts products = {props.products} />
        </div>
    )
}

export default ProductDetail
