
export const formatDate = (datestr: string) => {
    const date = new Date(datestr)
    const formatter = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium"
    })

    return formatter.format(date)
}


export const formatCurreccy = (amount: number) => {
    const formatter = new Intl.NumberFormatFormat("id-ID", {
        style: "currency",
    })

    return formatter.format(date)
}