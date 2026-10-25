import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {

    const handleSubmitForm = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, password: string }
        console.log(user, "user data")
        const { data, error
        } = await authClient.signUp.email({
            ...user,
            callbackURL: "/",

        })
        if (data) {
            toast.success('Signup successfully',
                {
                    style: {
                        background: "#333",
                        color: "#fff",
                        padding: "16px",
                        borderRadius: "8px",
                        textAlign: "center",
                    }
                });
            redirect("/");
        }
        if (error) {
            toast.error(error.message as string)
        }

    }

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newDataUser = Object.fromEntries(formData.entries()) as { name: string, image: string }
        console.log(newDataUser)

        const { data, error } = await authClient.updateUser({
            ...newDataUser
        })

        if (data) {
            toast.success("profile update successfully")
        }
        if (error) {
            toast.error(error.message as string)
        }

    }




    return (
        <div className="max-w-7xl mx-auto mt-10 bg-base-300">
            <form onSubmit={handleUpdateProfile} className="">
                <fieldset className="fieldset rounded-box w-10 border p-4">

                    <label className="label">Name</label>
                    <input type="text" name="name" className="input w-lg" placeholder="Your name" />

                    <label className="label">Image</label>
                    <input type="url" name="image" className="input w-lg" placeholder="image" />

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input w-lg" placeholder="Email" />


                    <button type="submit" className="btn bg-[#00B0B9] mt-4 font-bold text-2xl">Update profile</button>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateProfilePage;