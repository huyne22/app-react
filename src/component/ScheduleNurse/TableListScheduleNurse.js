import React from "react";
import Paginate from "../../Layout/Paginate";
import { FormattedMessage } from "react-intl";

const TableListScheduleNurse = (props) => {
  const { listSchedule, totalPage, fetchListSchedule } = props;
  const handlePageClick = (e) => {
    let selectedPage = e.selected + 1;
    fetchListSchedule(selectedPage);
  };
  return (
    <>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(234 233 233)" }}
      >
        <h1>
          <FormattedMessage id="system.List_of_duty_schedules" />
        </h1>

        <table className="table table-striped table-bordered table-hover table-spacing">
          <thead>
            <tr>
              <th>Ngay</th>
              <th>Buoi</th>
              <th>MaYTa</th>
              <th>SoLuongBNToiDa</th>
              <th>GhiChu</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listSchedule &&
              listSchedule?.map((item, index) => (
                <tr key={index}>
                  <td>{item.Ngay.split("T")[0]}</td>
                  <td>{item.Buoi}</td>
                  <td>{item.MaYTa}</td>
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
      <Paginate handlePageClick={handlePageClick} totalPage={totalPage} />
    </>
  );
};
export default TableListScheduleNurse;
