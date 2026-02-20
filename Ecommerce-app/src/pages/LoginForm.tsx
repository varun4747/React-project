import { Link } from "react-router-dom";
export default function LoginForm(){

    return(
<>

 <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-4">
                        <h3 className="text-center mb-4 text-dark">Sign in </h3>
                        <form >
                            <div className="mb-2    ">
                                <label className="form-label">Email<span className="text-danger">*</span></label>
                                <input type="text"
                                 id="email" 
                                 className="form-control" 
                                 placeholder="Enter your email"/>
                            </div>
                            <div className="mb-2    ">
                                <label className="form-label">Password<span className="text-danger">*</span></label>
                                <input type="password"
                                 id="password" 
                                 className="form-control" 
                                 placeholder="Enter your password"/>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
                             <div>
                            <p className="mt-1 mx-5">Don't Have a Account ? <Link to="RegistrationForm" style={{textDecoration:"none", color:"#4cb04f"}}>Sign up</Link></p>
                        </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
</>
    );
}