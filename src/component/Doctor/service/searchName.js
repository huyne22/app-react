import React, { useState } from "react";
import "../../../Layout/search__input.scss";

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
            Tên bác sĩ
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
          Tìm kiếm
        </button>
      </div>
      <table className="table table-striped table-bordered table-hover table-spacing">
        <div style={{ display: isVisible ? "block" : "none" }}>
          {data?.data &&
            data?.data?.map((item, index) => (
              <tr key={index}>
                <td>{item.MaBS}</td>
                <td>{item.HoBS}</td>
                <td>{item.TenBS}</td>
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
