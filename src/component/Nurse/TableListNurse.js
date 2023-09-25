import React from "react";

const TableListNurse = (props) => {
  const { listNurse } = props;
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>Danh sách y tá</h1>
        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>MaYT</th>
              <th>HoYT</th>
              <th>TenYT</th>
              <th>SoDT</th>
              <th>Email</th>
              <th>ChuyenMon</th>
              <th>BangCap</th>
              <th>GioiTinh</th>
              <th>MaNguoiDung</th>
              <th>GhiChu</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listNurse &&
              listNurse?.map((item) => (
                <tr key={item.MaYT}>
                  <td>{item.MaYT}</td>
                  <td>{item.HoYT}</td>
                  <td>{item.TenYT}</td>
                  <td>{item.SoDT}</td>
                  <td>{item.Email}</td>
                  <td>{item.ChuyenMon}</td>
                  <td>{item.BangCap}</td>
                  <td>{item.GioiTinh}</td>
                  <td>{item.MaNguoiDung}</td>
                  <td>{item.GhiChu}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => props.handleBtnUpdate(item)}
                    >
                      Sửa
                    </button>

                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => props.handleBtnDelete(item)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableListNurse;
