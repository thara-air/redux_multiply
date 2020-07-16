export const CAL_TOTAL = "CAL_TOTAL"
export function calTotal(price, qty) {
    const total = price * qty
return {type: CAL_TOTAL,total}
}