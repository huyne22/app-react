import React from "react";
import Paginate from "../../Layout/Paginate";
import { FormattedMessage } from "react-intl";

const TableListMedicine = (props) => {
  const { listMedicine, totalPage, fetchListMedicine } = props;
  const handlePageClick = (e) => {
    let selectedPage = e.selected + 1;
    fetchListMedicine(selectedPage);
  };
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>
          <FormattedMessage id="system.List_of_medicines" />
        </h1>

        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>MaThuoc</th>
              <th>TenThuoc</th>
              <th>CongDung</th>
              <th>DonVi</th>
              <th>SoLuong</th>
              <th>GhiChu</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listMedicine &&
              listMedicine?.map((item) => (
                <tr key={item.MaThuoc}>
                  <td>{item.MaThuoc}</td>
                  <td>{item.TenThuoc}</td>
                  <td>{item.CongDung}</td>
                  <td>{item.DonVi}</td>
                  <td>{item.SoLuong}</td>
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
export default TableListMedicine;
