import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateDoctor } from "../service/apiService";
import { toast } from "react-toastify";

const ModalCreateDoctor = (props) => {
  //modal
  const { show, setShow } = props;
  const [maBS, setMaBS] = useState("");
  const [hoBS, setHoBS] = useState("");
  const [tenBS, setTenBS] = useState("");
  const [soDT, setSoDT] = useState("");
  const [email, setEmail] = useState("");
  const [bangCap, setBangCap] = useState("");
  const [chuyenMon, setChuyenMon] = useState("");
  const [gioiTinh, setGioiTinh] = useState("Nam");
  const [maNguoiDung, setMaNguoiDung] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  useEffect(() => {
    setMaBS("");
    setHoBS("");
    setTenBS("");
    setSoDT("");
    setEmail("");
    setBangCap("");
    setChuyenMon("");
    setGioiTinh("Nam");
    setMaNguoiDung("");
    setGhiChu("");
  }, [show]);
  const handleSubmit = async (e) => {
    let res = await postCreateDoctor(
      maBS,
      hoBS,
      tenBS,
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
      toast.success("🦄Tạo mới bác sĩ thành công!");
      await props.fetchListDoctor();
    } else if (res?.errCode == 2) {
      toast.error("🦄Tạo mới bác sĩ thất bại! Mã bác sĩ đã tồn tại!");
    } else if (res?.errCode == 4) {
      toast.error("🦄Tạo mới bác sĩ thất bại! Mã người dùng đã tồn tại!");
    } else {
      toast.error("🦄Tạo mới bác sĩ thất bại!");
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
          <Modal.Title>Thêm bác sĩ mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaBS" className="form-label">
                Mã bác sĩ (Số nguyên)
              </label>
              <input
                type="text"
                className="form-control"
                id="MaBS"
                name="MaBS"
                value={maBS}
                onChange={(e) => setMaBS(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="HoBS" className="form-label">
                Họ
              </label>
              <input
                type="text"
                className="form-control"
                id="HoBS"
                name="HoBS"
                value={hoBS}
                onChange={(e) => setHoBS(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenBS" className="form-label">
                Tên
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

export default ModalCreateDoctor;
