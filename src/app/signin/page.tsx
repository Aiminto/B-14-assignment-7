"use client"

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {

    const handleSubmitSignin =async (e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {email:string, password:string}

        const {data, error}= await authClient.signIn.email({
            ...user,
            callbackURL:"/"
        })
        if(data){
            toast.success("Signin in successfully", {
                style: {
                    background: "#333",
                    color: "#fff",
                    padding: "16px",
                    borderRadius: "8px",
                    textAlign: "center",
                },
            })
            console.log(data)
        }

        if(error){
            toast.error(error.message as string)
            console.log(error)
        }


    }

    const handleGoogleSignin = async()=>{

          
        const data = await authClient.signIn.social({
            provider: "google",
        })

        console.log(data)


    }


    const handleGithubSign = async()=>{
        const data = await authClient.signIn.social({
            provider:"github",
        })
    }


    return (
        <div className='flex flex-col items-center justify-center mt-10'>
              <h2 className=" font-bold text-3xl text-[#1D271F]">সাইন ইন</h2>
            <form onSubmit={handleSubmitSignin}>
                <fieldset className="fieldset rounded-box w- border p-4">
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input w-md" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input w-md" placeholder="Password" />

                    <button className="btn bg-[#16A34A] mt-4 font-bold text-2xl">সাইন ইন</button>
                </fieldset>
            </form>

            <button onClick={handleGoogleSignin} className="btn btn-success mt-3 p-2">SignIn with Google</button>
            <button onClick={handleGithubSign}  className=" btn btn-active mt-2 p-2">SignIn with Github</button>
        </div>
    );
};

export default SignInPage;