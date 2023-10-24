import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const SearchPhone = (props) => {
  const [soDT, setSoDT] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { onSearch } = props;
  const [data, setData] = useState("");
  const handleSearch = async () => {
    let on = await onSearch(soDT);
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
          <label htmlFor="SoDT" className="form-label">
            <FormattedMessage id="system.phone_number" />
          </label>
          <input
            type="tel"
            className="form-control"
            id="SoDT"
            name="SoDT"
            value={soDT}
            onChange={(e) => setSoDT(e.target.value)}
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
                <td>{item.MaBN}</td>
                <td>{item.HoBN}</td>
                <td>{item.TenBN}</td>
                <td>{item.SoDT}</td>
                <td>{item.Email}</td>
                <td>{item.NgaySinh.split("T")[0]}</td>
                <td>{item.GioiTinh}</td>
                <td>{item.DiaChi}</td>
                <td>{item.GhiChu}</td>
              </tr>
            ))}
        </div>
      </table>
    </>
  );
};

export default SearchPhone;
