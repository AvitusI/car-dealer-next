import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1>Custom Not Found Page</h1>
            <p>Take a look at <Link href="/cars" className="text-blue-500"> our cars</Link></p>
        </div>
    )
}