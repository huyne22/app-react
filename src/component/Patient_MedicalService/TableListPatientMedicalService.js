import React from "react";
import Paginate from "../../Layout/Paginate";

const TableListPatientMedicalService = (props) => {
  const {
    listPatientMedicalService,
    totalPage,
    fetchListPatientMedicalService,
  } = props;
  const handlePageClick = (e) => {
    let selectedPage = e.selected + 1;
    fetchListPatientMedicalService(selectedPage);
  };
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>Danh sách bệnh nhân - dịch vụ</h1>
        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>MaBN</th>
              <th>MaDV</th>
              <th>Ngay</th>
              <th>Buoi</th>
              <th>SoLuong</th>
              <th>GhiChu</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listPatientMedicalService &&
              listPatientMedicalService?.map((item, index) => (
                <tr key={index}>
                  <td>{item.MaBN}</td>
                  <td>{item.MaDV}</td>
                  <td>{item.Ngay}</td>
                  <td>{item.Buoi}</td>
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
export default TableListPatientMedicalService;
