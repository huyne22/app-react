import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const SearchDate = (props) => {
  const [ngay, setNgay] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const { onSearch } = props;
  const [data, setData] = useState("");
  const handleSearch = async () => {
    let on = await onSearch(ngay);
    setData(on);
    toggleVisibility();
  };
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="Ngay" className="form-label">
            <FormattedMessage id="system.look_up_date" />
          </label>
          <input
            type="date"
            className="form-control"
            id="Ngay"
            name="Ngay"
            value={ngay}
            onChange={(e) => setNgay(e.target.value)}
            required
          />
        </div>
        <button className="btn-search" onClick={handleSearch}>
          <FormattedMessage id="common.search" />
        </button>
      </div>
      <table className="table table-striped table-bordered table-hover table-spacing">
        <div style={{ display: isVisible ? "block" : "none" }}>
          {data?.data &&
            data?.data?.map((item, index) => (
              <tr key={index}>
                <td>{item.Ngay.split("T")[0]}</td>
                <td>{item.Buoi}</td>
                <td>{item.MaBS}</td>
                <td>{item.SoLuongBNToiDa}</td>
                <td>{item.GhiChu}</td>
                <button
                  color={{ color: "#7089af" }}
                  className="hidden-btn"
                  onClick={() => toggleVisibility()}
                >
                  ẩn
                </button>
              </tr>
            ))}
        </div>
      </table>
    </>
  );
};

export default SearchDate;
