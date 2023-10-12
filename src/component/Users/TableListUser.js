import React from "react";
import Paginate from "../../Layout/Paginate";
import { FormattedMessage } from "react-intl";

const TableListUser = (props) => {
  const { listUser, totalPage, fetchListUser } = props;
  const handlePageClick = (e) => {
    let selectedPage = e.selected + 1;
    fetchListUser(selectedPage);
  };
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>
          {" "}
          <FormattedMessage id="system.List_of_doctors" />
        </h1>
        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>MaNguoiDung</th>
              <th>TenDangNhap</th>
              <th>GhiChu</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listUser &&
              listUser?.map((item) => (
                <tr key={item.MaNguoiDung}>
                  <td>{item.MaNguoiDung}</td>
                  <td>{item.TenDangNhap}</td>
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
export default TableListUser;
