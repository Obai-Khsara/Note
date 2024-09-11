import React from 'react'

const useCreateDate = () => {
    const dateObj = new Date()
    const month = dateObj.getMonth()
    let monthName
    switch(month){
        case 0: monthName = "January"
        break
        case 1: monthName = "Febraury"
        break
        case 2: monthName = "Mars"
        break
        case 3: monthName = "April"
        break
        case 4: monthName = "May"
        break
        case 5: monthName = "Jun"
        break
        case 6: monthName = "July"
        break
        case 7: monthName = "Augest"
        break
        case 8: monthName = "Setember"
        break
        case 9: monthName = "October"
        break
        case 10: monthName = "Novermber"
        break
        case 11: monthName = "December"
        break
    }
    const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}
    [${dateObj.getHours()} : ${dateObj.getMinutes()}]`

    return date
}

export default useCreateDate