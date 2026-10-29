"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import UpdateProfilePage from "./update/page";
import { useState } from "react";

const ProfilePage = () => {

    const [show, setShow] = useState(false)
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user)


    const handleShowform = () => {
        setShow(!show)
    }

    return (
        <div className=" flex flex-1 items-center mt-10">

            <div className=" py-5">
                <Link href={"/profile"}>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <img alt="image" src={user?.image as string} />
                        </div>
                    </div>
                </Link>

                <h2>Name:{user?.name}</h2>
                <p>Email:{user?.email}</p>
                <button onClick={handleShowform} className="btn btn-info">Edit Profile</button>

                {show && <UpdateProfilePage></UpdateProfilePage>}



            </div>


        </div>
    );
};

export default ProfilePage;