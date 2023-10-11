import React from "react";
import Paginate from "../../Layout/Paginate";

const TableListDoctor = (props) => {
  const { listDoctor, totalPage, fetchListDoctor } = props;
  const handlePageClick = (e) => {
    let selectedPage = e.selected + 1;
    fetchListDoctor(selectedPage);
  };
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>Danh sách bác sĩ</h1>
        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>MaBS</th>
              <th>HoBS</th>
              <th>TenBS</th>
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
            {listDoctor &&
              listDoctor?.map((item) => (
                <tr key={item.MaBS}>
                  <td>{item.MaBS}</td>
                  <td>{item.HoBS}</td>
                  <td>{item.TenBS}</td>
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
      <Paginate handlePageClick={handlePageClick} totalPage={totalPage} />
    </>
  );
};
export default TableListDoctor;
