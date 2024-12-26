import Link from "next/link"

export default async function Cars() {
    const data = await fetch(
        `${process.env.API_URL}/cars`, {
        next: {
            revalidate: 10
        }
    }
    )

    const { cars }: { cars: Record<any, any>[] } = await data.json()

    console.log(cars)

    return (
        <>
            <h1>Cars</h1>
            <div>
                {cars?.map((car: any) => (
                    <div
                        key={car.id}
                        className="m-4 bg-white p-2"
                    >
                        <Link href={`/cars/${car.id}`}>
                            <p>{car.brand} {car.make} from {car.year}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}