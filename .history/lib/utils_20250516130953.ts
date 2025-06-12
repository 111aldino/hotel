
export const formatDate = (datestr: string) => {
    const date = new Date(datestr)
    const formatter = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium"
    })

    return formatter.format(date)
}


export const formatCurreccy = (amount: number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 3,
    })

    return formatter.format(amount)
}