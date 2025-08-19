
function Calculation() {
    const a = 10;
    const b = 5;
    return (
        <div>
            <h2>Danh sách kết quả</h2>
            <ul>
                <li>{a}+{b}={a + b}</li>
                <li>{a}-{b}={a - b}</li>
                <li>{a}*{b}={a * b}</li>
                <li>{a}/{b}={a / b}</li>
            </ul>
        </div>
    )
}

export default Calculation