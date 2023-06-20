
interface IParams {
    userId: string; 
}

export default function OrdersPage({params}: {params: IParams}) {
    const {userId} = params; 
    return(
        <div>
            Orderpage; 
        </div>
    )
}