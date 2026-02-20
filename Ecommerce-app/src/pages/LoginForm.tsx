import  { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface FormData{

    email: string;
    password: string;
}
export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    // const navigate = useNavigate();
    const [message, setMessage] = useState<string | null>(null);

    const handleLogin = async (loginData: FormData) => {
        try {
            const response = await fetch(`http://localhost:4000/registrationsData?email=${encodeURIComponent(loginData.email)}`);
            if (!response.ok) {
                setMessage(`Server error: ${response.status}`);
                return;
            }
            const users = await response.json();
            if (!Array.isArray(users) || users.length === 0) {
                setMessage("User not found. Please create a new account.");
                return;
            }
            const user = users[0];

            if (user.password === loginData.password) {
                setMessage("Login successful. Welcome " + user.FullName);
                localStorage.setItem("user", JSON.stringify(user));
                
            } else {
                setMessage("Invalid password.");
            }
        } catch (error: any) {
            setMessage("Login failed: " + (error?.message ?? error));
        }
    };
    return (
        <>

            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg p-4">
                            <h3 className="text-center mb-4 text-dark">Sign in </h3>
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="mb-2    ">
                                    <label className="form-label">Email<span className="text-danger">*</span></label>
                                    <input type="text"
                                        id="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        {...register("email",
                                            {
                                                required: { value: true, message: "Email is required" },

                                            }
                                        )} />
                                    {errors.email && <p className="text-danger">{errors.email.message as string}</p>}
                                </div>
                                <div className="mb-2    ">
                                    <label className="form-label">Password<span className="text-danger">*</span></label>
                                    <input type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        {...register("password",
                                            {
                                                required: { value: true, message: "Password is required" },
                                            }
                                        )} />
                                    {errors.password && <p className="text-danger">{errors.password.message as string}</p>}
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
                                {message && <p className="mt-2 text-center text-danger">{message}</p>}
                                <div>
                                    <p className="mt-1 mx-5">Don't Have a Account ? <Link to="/registration" style={{ textDecoration: "none", color: "#4cb04f" }}>Sign up</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}