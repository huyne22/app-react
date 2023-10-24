import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateNurse } from "../service/apiService";
import { toast } from "react-toastify";

const ModalCreateNurse = (props) => {
  const { show, setShow } = props;
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

  useEffect(() => {
    setMaYT("");
    setHoYT("");
    setTenYT("");
    setSoDT("");
    setEmail("");
    setBangCap("");
    setChuyenMon("");
    setGioiTinh("Nam");
    setMaNguoiDung("");
    setGhiChu("");
  }, [show]);
  const handleSubmit = async (e) => {
    let res = await postCreateNurse(
      maYT,
      hoYT,
      tenYT,
      soDT,
      email,
      bangCap,
      chuyenMon,
      gioiTinh,
      maNguoiDung,
      ghiChu
    );
    if (res?.errCode == 0) {
      setShow(false);
      toast.success("🦄Tạo mới y tá thành công!");
      await props.fetchListNurse();
    } else if (res?.errCode == 4) {
      toast.error("🦄Tạo mới y tá thất bại! Mã người dùng đã tồn tại!");
    } else if (res?.errCode == 2) {
      toast.error("🦄Tạo mới y tá thất bại! Mã y tá đã tồn tại!");
    } else {
      toast.error("🦄Tạo mới y tá thất bại!");
    }
  };

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thêm y tá mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaYT" className="form-label">
                Mã y tá (Số nguyên)
              </label>
              <input
                type="text"
                className="form-control"
                id="MaYT"
                name="MaYT"
                value={maYT}
                onChange={(e) => setMaYT(e.target.value)}
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                type="text"
                className="form-control"
                id="MaNguoiDung"
                name="MaNguoiDung"
                value={maNguoiDung}
                onChange={(e) => setMaNguoiDung(e.target.value)}
                required
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
                required
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateNurse;
