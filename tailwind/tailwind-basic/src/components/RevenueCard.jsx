

export const RevenueCard = ({
    title,
    showWarning,
    orderCount,
    amount
})=>{
    return(
        <>
            <div className="bg-yellow-500 rounded shadow-sm">
                <div>
                    {title}
                    
                </div>
            </div>
        </>
    )
}