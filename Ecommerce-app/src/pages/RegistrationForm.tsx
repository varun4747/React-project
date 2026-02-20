import { useForm} from "react-hook-form";
import { Link } from "react-router-dom";

interface FormData{
    FullName: string;
    mobile: string;
    email: string;
    password: string;
}
export default function RegistrationForm(){
    const {register, handleSubmit,reset, formState: {errors}} = useForm<FormData>();
    const submitHandle = (data: FormData) => {
        // console.log(data);
        setFormData(data);
        reset();
    }
        

  const setFormData=(async (formData:FormData)=>{
    try{
        const response = await fetch("http://localhost:4000/registrationsData",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"},
            body: JSON.stringify(formData)
        });
        if(response.ok){
            const res = await response.json();
            window.alert("Registration successful!"  +   `${res.FullName}`);
            
        }
    }catch(error){
        window.alert("Details Not Correct: " + error);
    }
    
  })
//   useEffect(()=>{
//     setFormData;
//   },[])
    return(
        <>
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-4">
                        <h3 className="text-center mb-4 text-dark">Sign up </h3>
                        <form onSubmit={handleSubmit(submitHandle)}>
                            <div className="mb-2    ">
                                <label className="form-label">Full Name<span className="text-danger">*</span></label>
                                <input type="text"
                                 id="full-name" 
                                 className="form-control" 
                                 placeholder="Enter your full name"
                                 {...register("FullName",
                                    {
                                        required:{value:true,message:"Full name is required"},
                                        pattern:{value:/^[A-Za-z]+(?:\s[A-Za-z]+)+$/,message:"Full name should only contain letters and spaces"}
                                    }
                                 )}/>
                                    {errors.FullName && <p className="text-danger">{errors.FullName.message}</p>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile Number<span className="text-danger">*</span></label>
                                <input type="text"
                                 id="mobile" 
                                 className="form-control"
                                  placeholder="Enter your mobile number"
                                  {...register("mobile",
                                    {
                                        required:{value:true,message:"Mobile number is required"},
                                        pattern:{value:/^[0-9]{10}$/,message:"Mobile number should be 10 digits"}
                                    }
                                 )}/>
                                    {errors.mobile && <p className="text-danger">{errors.mobile.message}</p>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address<span className="text-danger">*</span></label>
                                <input type="email" id="email" className="form-control" placeholder="Enter your email"
                                {...register("email",
                                    {
                                        required:{value:true,message:"Email is required"},
                                        pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Invalid email format"}
                                    }
                                )}/>
                                {errors.email && <p className="text-danger">{errors.email.message}</p>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password<span className="text-danger">*</span></label>
                                <input type="password" id="password" className="form-control" placeholder="Create a password"
                                {...register("password",
                                    {
                                        required:{value:true,message:"Password is required"},
                                        pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,message:"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character"}
                                    }
                                )}/>
                                {errors.password && <p className="text-danger">{errors.password.message}</p>}
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-2">Register</button>
                        </form>
                        <div>
                            <p className="mt-1 mx-5">Already Have an Account ? <Link to="/LoginForm" style={{textDecoration:"none", color:"#4cb04f"}}>Sign in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}