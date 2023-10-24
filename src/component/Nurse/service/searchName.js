import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const SearchName = (props) => {
  const [tenYT, setTenYT] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { onSearch } = props;
  const [data, setData] = useState("");
  const handleSearch = async () => {
    console.log("data", data);
    let on = await onSearch(tenYT);
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
          <label htmlFor="TenYT" className="form-label">
            <FormattedMessage id="system.nurse's_name" />
          </label>
          <input
            type="text"
            className="form-control"
            id="TenYT"
            name="TenYT"
            value={tenYT}
            onChange={(e) => setTenYT(e.target.value)}
            required
          />
        </div>
        <button className="btn-search" onClick={handleSearch}>
          <FormattedMessage id="common.search" />
        </button>
      </div>
      <table className="table table-striped table-bordered table-hover table-spacing">
        <div className={`${isVisible ? "block" : "none"}`}>
          {data?.data &&
            data?.data?.map((item, index) => (
              <tr key={index} className="yellow-row">
                <td>{item.MaYT}</td>
                <td>{item.HoYT}</td>
                <td>{item.TenYT}</td>
                <td>{item.SoDT}</td>
                <td>{item.Email}</td>
                <td>{item.BangCap}</td>
                <td>{item.ChuyenMon}</td>
                <td>{item.GioiTinh}</td>
                <td>{item.MaNguoiDung}</td>
                <td>{item.GhiChu}</td>
              </tr>
            ))}
        </div>
      </table>
    </>
  );
};

export default SearchName;
