import { redirect } from "next/navigation"
import { getSession } from "@/actions"
import { CarForm } from "@/components/CarForm"

export default async function Private() {
    const session = await getSession()

    // @ts-ignore
    if (!session?.jwt) {
        redirect("/login")
    }

    return (
        <div className="p-4">
            <h1>Private Page</h1>
            <CarForm />
        </div>
    )
}