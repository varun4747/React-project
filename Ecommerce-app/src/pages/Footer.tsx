function Footer(){

    return(
        <div>
           <div className="row bg-dark text-white p-2">
            <div className="col-12 col-md-6">
                <h5>Contact Us</h5>
                <p>Email: support@mobilestore.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
            <div className="col-12 col-md-6">
                <h5>Follow Us</h5>
                <a href="#" className="text-white me-2">Facebook</a>
                <a href="#" className="text-white me-2">Twitter</a>
                <a href="#" className="text-white">Instagram</a>
                </div>

           </div>
        </div>
    );
}
export default Footer;