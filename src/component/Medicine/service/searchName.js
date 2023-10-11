import React, { useState } from "react";
import "../../../Layout/search__input.scss";

const SearchName = (props) => {
  const [tenThuoc, setTenThuoc] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const { onSearch } = props;
  const [data, setData] = useState("");
  const handleSearch = async () => {
    console.log("data", data);
    let on = await onSearch(tenThuoc);
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
          <label htmlFor="TenThuoc" className="form-label">
            Tên thuốc
          </label>
          <input
            type="text"
            className="form-control"
            id="TenThuoc"
            name="TenThuoc"
            value={tenThuoc}
            onChange={(e) => setTenThuoc(e.target.value)}
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
                <td>{item.MaThuoc}</td>
                <td>{item.TenThuoc}</td>
                <td>{item.CongDung}</td>
                <td>{item.DonVi}</td>
                <td>{item.SoLuong}</td>
                <td>{item.GhiChu}</td>
              </tr>
            ))}
        </div>
      </table>
    </>
  );
};

export default SearchName;
