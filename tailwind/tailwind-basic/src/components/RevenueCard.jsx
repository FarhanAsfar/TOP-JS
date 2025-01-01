

export const RevenueCard = ({
    title,
    orderCount,
    amount
})=>{
    return(
        <>
            <div className="bg-gray-500 rounded shadow-md p-4">
                <div className="text-gray-700">
                    {title}
                    ?
                </div>
                <div className="flex justify-between">
                    <div>
                        $ {amount}
                    </div>
                        {orderCount ? <div className="flex">
                            <div>{orderCount} order(s)</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path  stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div> : null}
                 </div>   

            </div>
        </>
    )
}