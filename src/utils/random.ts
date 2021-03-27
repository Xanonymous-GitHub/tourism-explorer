import Hashids from 'hashids'

const hashids = new Hashids()

export const getRandomSerial = (): string => {
    const now = Date.now()
    const randomKeyA = Math.random()
    const randomKeyB = Math.random()
    return hashids.encodeHex(`${now}`+`${randomKeyA}`.slice(2)+`${randomKeyB}`.slice(2))
}