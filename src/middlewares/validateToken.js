
export const authRequired = (res, req, next) => {
    console.log('validing token')
    next()
}