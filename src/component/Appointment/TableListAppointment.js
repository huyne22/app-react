import React from "react";
import Paginate from "../../Layout/Paginate";
import { FormattedMessage } from "react-intl";

const TableListAppointment = (props) => {
  const { listAppointment, totalPage, fetchListAppointment } = props;
  const handlePageClick = (e) => {
    let selectedPage = e.selected + 1;
    fetchListAppointment(selectedPage);
  };
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>
          <FormattedMessage id="system.List_of_appointments" />
        </h1>
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
              listAppointment?.map((item, index) => (
                <tr key={index}>
                  <td>{item.Ngay.split("T")[0]}</td>
                  <td>{item.Buoi}</td>
                  <td>{item.MaBS}</td>
                  <td>{item.MaBN}</td>
                  <td>
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
export default TableListAppointment;
