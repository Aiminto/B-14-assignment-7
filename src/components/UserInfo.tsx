"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user, "datakoi")

    const handleSignOut =async ()=>{
        await authClient.signOut();
    }


    return (
        <div className="">
            {
                user ? (<div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <img alt="image" src={user?.image as string} />
                        </div>

                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>

                        <button onClick={handleSignOut} className="btn btn-accent">SignOut</button>
                    </div>

                </div>) : (<div className="flex gap-2.5">
                    <Link href={"/signin"}><button className="btn bg-[#16A34A]">সাইন ইন</button></Link>
                  <Link href={"/signup"}>  <button className="btn ">সাইন আপ</button></Link>
                </div>)
            }

        </div>
    );
};

export default UserInfo;