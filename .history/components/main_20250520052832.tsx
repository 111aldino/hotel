import Card from '@/components/card'
import { getRooms } from '@/lib/data'


const Main = async () => {
    const rooms = await getRooms()
    if()
    return (
        <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto ">
            <div className="grid gap-7 md:grid-cols-3">
                <Card/>
            </div>
        </div>
    )
}

export default Main