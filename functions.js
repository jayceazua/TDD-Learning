module.exports = {
    area(w, l) {
        a = w * l
        return a
    },

    perimeter(w, l) {
        p = 2 * (w + l)
        return p
    },

    areaCircle(r) {
        return Math.round(Math.PI * Math.pow(r, 2) * 100) / 100 
    }
}
