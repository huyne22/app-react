import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditNurse } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditNurse = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [maYT, setMaYT] = useState("");
  const [hoYT, setHoYT] = useState("");
  const [tenYT, setTenYT] = useState("");
  const [soDT, setSoDT] = useState("");
  const [email, setEmail] = useState("");
  const [bangCap, setBangCap] = useState("");
  const [chuyenMon, setChuyenMon] = useState("");
  const [gioiTinh, setGioiTinh] = useState("Nam");
  const [maNguoiDung, setMaNguoiDung] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject);
  };
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setMaYT(dataUpdate.MaYT);
      setHoYT(dataUpdate.HoYT);
      setTenYT(dataUpdate.TenYT);
      setSoDT(dataUpdate.SoDT);
      setEmail(dataUpdate.Email);
      setBangCap(dataUpdate.BangCap);
      setChuyenMon(dataUpdate.ChuyenMon);
      setGioiTinh(dataUpdate.GioiTinh);
      setMaNguoiDung(dataUpdate.MaNguoiDung);
      setGhiChu(dataUpdate.GhiChu);
      updateObjectWithNewProperty();
    } else {
    }
  }, [dataUpdate]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaYT: maYT.toString(),
    }));
  }, [maYT]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      HoYT: hoYT,
    }));
  }, [hoYT]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      TenYT: tenYT,
    }));
  }, [tenYT]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      SoDT: soDT,
    }));
  }, [soDT]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Email: email,
    }));
  }, [email]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      BangCap: bangCap,
    }));
  }, [bangCap]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      ChuyenMon: chuyenMon,
    }));
  }, [chuyenMon]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GioiTinh: gioiTinh,
    }));
  }, [gioiTinh]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaNguoiDung: maNguoiDung,
    }));
  }, [maNguoiDung]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);

  const handleSubmit = async (e) => {
    let res = await postEditNurse(yourObject);
    if (res?.errCode === 0) {
      setShow1(false);
      toast.success("Cập nhật y tá thành công!");
      await props.fetchListNurse();
    } else if (res?.errCode === 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật y tá thất bại!");
    }
  };

  const handleClose = () => {
    setShow1(false);
  };
  return (
    <>
      <Modal
        size="lg"
        show={show1}
        onHide={() => handleClose(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa thông tin y tá</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaYT" className="form-label">
                Mã Bác sĩ
              </label>
              <input
                type="text"
                className="form-control"
                id="MaYT"
                name="MaYT"
                value={maYT}
                onChange={(e) => setMaYT(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="HoYT" className="form-label">
                Họ
              </label>
              <input
                type="text"
                className="form-control"
                id="HoYT"
                name="HoYT"
                value={hoYT}
                onChange={(e) => setHoYT(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenYT" className="form-label">
                Tên
              </label>
              <input
                type="text"
                className="form-control"
                id="TenYT"
                name="TenYT"
                value={tenYT}
                onChange={(e) => setTenYT(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="SoDT" className="form-label">
                Số Điện Thoại
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
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="BangCap" className="form-label">
                Bằng cấp
              </label>
              <input
                type="text"
                className="form-control"
                id="BangCap"
                name="BangCap"
                value={bangCap}
                onChange={(e) => setBangCap(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ChuyenMon" className="form-label">
                Chuyên môn
              </label>
              <input
                type="text"
                className="form-control"
                id="ChuyenMon"
                name="ChuyenMon"
                value={chuyenMon}
                onChange={(e) => setChuyenMon(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="GioiTinh" className="form-label">
                Giới tính
              </label>
              <select
                className="form-select"
                id="GioiTinh"
                name="GioiTinh"
                value={gioiTinh}
                onChange={(e) => setGioiTinh(e.target.value)}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="MaNguoiDung" className="form-label">
                Mã người dùng
              </label>
              <input
                className="form-control"
                id="MaNguoiDung"
                name="MaNguoiDung"
                value={maNguoiDung}
                onChange={(e) => setMaNguoiDung(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="GhiChu" className="form-label">
                Ghi Chú
              </label>
              <textarea
                className="form-control"
                id="GhiChu"
                name="GhiChu"
                value={ghiChu}
                onChange={(e) => setGhiChu(e.target.value)}
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEditNurse;
