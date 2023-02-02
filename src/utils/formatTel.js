
export const formatTel = (tel) => {
    // Format ddd
    const ddd = tel.split('').slice(0, 2)
    ddd.unshift('(')
    ddd.push(')')

    // Format Number
    const number = tel.split('').slice(2)
    number.unshift(' ')
    number.splice(6,0, '-')


    return ddd.join('').concat(number.join(''))
}
