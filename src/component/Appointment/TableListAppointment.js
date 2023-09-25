import React from "react";

const TableListAppointment = (props) => {
  const { listAppointment } = props;
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>Danh sách lịch hẹn</h1>
        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>Ngay</th>
              <th>Buoi</th>
              <th>MaBS</th>
              <th>MaBN</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listAppointment &&
              listAppointment?.map((item) => (
                <tr key={item.Ngay}>
                  <td>{item.Ngay.split("T")[0]}</td>
                  <td>{item.Buoi}</td>
                  <td>{item.MaBS}</td>
                  <td>{item.MaBN}</td>
                  <td>
                    {/* <button
                      className="btn btn-warning"
                      onClick={() => props.handleBtnUpdate(item)}
                    >
                      Sửa
                    </button> */}

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
export default TableListAppointment;
