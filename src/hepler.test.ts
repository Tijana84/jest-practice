import { removeDuplciates } from "./helper";

describe('removeDuplciates', () => {
    it ('should remove all duplicates', () => {
        const result = removeDuplciates([113, 44, 113, 55, 2, 55, 12])
        expect(result).toEqual([113, 44, 55, 2, 12]);
    })

    it ('should return [] if we pass []', () => {
        const result = removeDuplciates([])
        expect(result).toEqual([]);
    })
}) 