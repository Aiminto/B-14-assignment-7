"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";


const SignUpPage = () => {
    const handleSubmitForm=async(e:React.SubmitEvent<HTMLElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {name: string, email: string, image: string, password: string}
        console.log(user,"user data")
     const {data, error
     } = await authClient.signUp.email({
            ...user,
            callbackURL: "/",

        })
        if(data){
            console.log(data,'data from user')
            redirect("/")
            
        }
        if(error){
            console.log("error",error)
        }

    }


    return (
        <div className=" flex flex-col items-center justify-center mt-10">
            <h2 className=" font-bold text-3xl text-[#1D271F]">সাইন আপ</h2>
            <form onSubmit={handleSubmitForm} className="">
                <fieldset className="fieldset rounded-box w- border p-4">
                   
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input w-md" placeholder="Your name" />

                    <label className="label">Image</label>
                    <input type="url" name="image" className="input w-md" placeholder="image" />

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input w-md" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input w-md" placeholder="Password" />

                    <button type="submit" className="btn mt-4 font-bold text-2xl">সাইন আপ</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;