import { useState, useEffect } from "react";

interface productDetails{
    id: number;
    title: string;
    price: number;
    image: string;
    specifications: specificationDeails;
}
interface specificationDeails{
    display: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
}
export default function Products() {
    const [data, setData] = useState([]);
    
    

    useEffect(() => {
        FetchedData();
    }, [])

    const FetchedData = async () => {
        try {
            const response = await fetch("http://localhost:4000/products");
            const res = await response.json();
            setData(res);

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    const priceOffer = (price: number) => {
        const discount = price * 0.1;
        const finalPrice = price - discount;
        return finalPrice;
    }
    
        
        
        return (
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                    <div className="input-group my-4">
                        <span className="input-group-text bg-white border-end-0">
                            <i className="bi bi-search"></i>
                        </span>
                        <input type="text" className="form-control border-start-0" placeholder="Search for products..." />
                    </div>
                </div>
                <div className="col-md-4 my-4">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <i className="bi bi-sort-down"></i>
                        </span>
                        <select className="form-select">
                            <option value="">Sort by Price</option>
                            <option value="lowToHigh"><i className="bi bi-arrow-up"></i> Low to High</option>
                            <option value="highToLow"><i className="bi bi-arrow-down"></i> High to Low</option>
                        </select>
                    </div>
                </div>
              </div>
                <div>
                    {data.map((product: productDetails) => (
                    <div key={product.id}>
                       <div className="row border p-4 mb-3">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} className="img-fluid" style={{height:"150px", width:"120px"}}/>
                        </div>
                        <div className="col-md-5">
                            <ul>
                                <h5>{product.title}</h5>
                                <li>{product.specifications.display}</li>
                                <li>{product.specifications.processor}</li>
                                <li>{product.specifications.ram}</li>
                                <li>{product.specifications.storage}</li>
                                <li>{product.specifications.camera}</li>
                                <li>{product.specifications.battery}</li>
                            </ul>

                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <h5 className="text-success"><i className="bi bi-tag-fill"></i> ₹{priceOffer(product.price).toFixed(2)}</h5>
                                <h5 className="text-muted"><del>₹{product.price}</del></h5>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn btn-primary flex-grow-1">
                                    <i className="bi bi-cart-fill"></i> Cart
                                </button>
                                <button className="btn btn-success flex-grow-1">
                                    <i className="bi bi-bag-check-fill"></i> Buy
                                </button>
                            </div>

                        </div>

                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
}