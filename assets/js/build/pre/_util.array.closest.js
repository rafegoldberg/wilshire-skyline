function closest(a, b) {
    for (var c = b[0], d = Math.abs(a - c), e = 0; e < b.length; e++) {
        var f = Math.abs(a - b[e]);
        d > f && (d = f, c = b[e]);
    }
    return c;
}