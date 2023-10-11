import React from "react";
import Paginate from "../../Layout/Paginate";
const TableListMedicalService = (props) => {
  const { listMedicalService, totalPage, fetchListMedicalService } = props;
  const handlePageClick = (e) => {
    let selectedPage = e.selected + 1;
    fetchListMedicalService(selectedPage);
  };
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>Danh sách dịch vụ</h1>
        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>MaDV</th>
              <th>TenDV</th>
              <th>MoTaDV</th>
              <th>GiaTien</th>
              <th>GhiChu</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listMedicalService &&
              listMedicalService?.map((item) => (
                <tr key={item.MaDV}>
                  <td>{item.MaDV}</td>
                  <td>{item.TenDV}</td>
                  <td>{item.MoTaDV}</td>
                  <td>{item.GiaTien}</td>
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
export default TableListMedicalService;
