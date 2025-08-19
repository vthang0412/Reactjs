
function UserInfo() {
    const userInfo = {
        name: "Đặng Văn Thắng",
        male: "Nam",
        date: "04/12/2006",
        email: "vthang@gmail.com",
        address: "Ha noi",
    }
    return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <ul>
                <li>Họ và tên:{userInfo.name}</li>
                <li>Giới tính:{userInfo.male}</li>
                <li>Ngày sinh:{userInfo.date}</li>
                <li>Email:{userInfo.email}</li>
                <li>Địa chỉ:{userInfo.address}</li>
            </ul>
        </div>
    )
}

export default UserInfo