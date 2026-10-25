"use client"

import { authClient } from "@/lib/auth-client";

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
            console.log(data)
        }

        if(error){
            console.log(error)
        }


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
        </div>
    );
};

export default SignInPage;