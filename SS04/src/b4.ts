function handleUnionType(inp: string | number) {
    if (typeof inp === "string") {
        console.log(inp.length, "ky tu")
    } else if (inp % 2 === 0) {
        console.log("day la so chan")
    } else (
        console.log("Day la so le")
    )
}
handleUnionType("hello")
handleUnionType(10)
