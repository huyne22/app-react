import React, { useState } from "react";
import "../../../Layout/search__input.scss";

const SearchName = (props) => {
  const [tenYT, setTenYT] = useState("");
  const [isVisible, setIsVisible] = useState(true);
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
            Tên y tá
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
          Tìm kiếm
        </button>
      </div>
      <table className="table table-striped table-bordered table-hover table-spacing">
        <div style={{ display: isVisible ? "block" : "none" }}>
          {data?.data &&
            data?.data?.map((item, index) => (
              <tr key={index}>
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
