import React from "react";

const TableListPatient = (props) => {
  const { listPatient } = props;
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>Danh sách bệnh nhân</h1>
        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>MaBN</th>
              <th>HoBN</th>
              <th>TenBN</th>
              <th>SoDT</th>
              <th>Email</th>
              <th>NgaySinh</th>
              <th>GioiTinh</th>
              <th>DiaChi</th>
              <th>GhiChu</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listPatient &&
              listPatient?.map((item) => (
                <tr key={item.MaBN}>
                  <td>{item.MaBN}</td>
                  <td>{item.HoBN}</td>
                  <td>{item.TenBN}</td>
                  <td>{item.SoDT}</td>
                  <td>{item.Email}</td>
                  <td>{item.NgaySinh.split("T")[0]}</td>
                  <td>{item.GioiTinh}</td>
                  <td>{item.DiaChi}</td>
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
export default TableListPatient;
