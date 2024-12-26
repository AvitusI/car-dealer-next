import { logout } from "@/actions";

export const LogoutForm = () => {
    return (
        <form action={logout}>
            <button className="bg-blue-500 hover:bg-blue-700 py-1 px-2 rounded" type="submit">
                Logout
            </button>
        </form>
    )
}