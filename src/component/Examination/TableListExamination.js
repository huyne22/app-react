import React from "react";
import Paginate from "../../Layout/Paginate";

const TableListExamination = (props) => {
  const { listExamination, totalPage, fetchListExamination } = props;
  const handlePageClick = (e) => {
    let selectedPage = e.selected + 1;
    fetchListExamination(selectedPage);
  };
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>Danh sách phiếu khám bệnh</h1>
        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>MaBS</th>
              <th>MaBN</th>
              <th>Ngay</th>
              <th>Buoi</th>
              <th>MaYTa</th>
              <th>KetQuaChuanDoanBenh</th>
              <th>GhiChu</th>
              <th>MaThuoc</th>
              <th>ThanhToan</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listExamination &&
              listExamination?.map((item, index) => (
                <tr key={index}>
                  <td>{item.MaBS}</td>
                  <td>{item.MaBN}</td>
                  <td>{item.Ngay}</td>
                  <td>{item.Buoi}</td>
                  <td>{item.MaYTa}</td>
                  <td>{item.KetQuaChuanDoanBenh}</td>
                  <td>{item.GhiChu}</td>
                  <td>{item.MaThuoc}</td>
                  <td>{item.ThanhToan}</td>
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
export default TableListExamination;
