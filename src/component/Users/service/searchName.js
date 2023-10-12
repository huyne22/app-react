import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const SearchName = (props) => {
  const [tenBS, setTenBS] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const { onSearch } = props;
  const [data, setData] = useState("");
  const handleSearch = async () => {
    console.log("data", data);
    let on = await onSearch(tenBS);
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
          <label htmlFor="TenBS" className="form-label">
            <FormattedMessage id="system.doctor's_name" />
          </label>
          <input
            type="text"
            className="form-control"
            id="TenBS"
            name="TenBS"
            value={tenBS}
            onChange={(e) => setTenBS(e.target.value)}
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
                <td>{item.MaNguoiDung}</td>
                <td>{item.TenDangNhap}</td>
                <td>{item.GhiChu}</td>
              </tr>
            ))}
        </div>
      </table>
    </>
  );
};

export default SearchName;
