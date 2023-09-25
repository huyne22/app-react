import React from "react";

const TableListSchedule = (props) => {
  const { listSchedule } = props;
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>Danh sách lịch trực</h1>
        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>Ngay</th>
              <th>Buoi</th>
              <th>MaBS</th>
              <th>SoLuongBNToiDa</th>
              <th>GhiChu</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listSchedule &&
              listSchedule?.map((item) => (
                <tr key={item.Ngay}>
                  <td>{item.Ngay.split("T")[0]}</td>
                  <td>{item.Buoi}</td>
                  <td>{item.MaBS}</td>
                  <td>{item.SoLuongBNToiDa}</td>
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
export default TableListSchedule;