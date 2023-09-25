import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreatePatient } from "../service/apiService";
import { toast } from "react-toastify";

const ModalCreatePatient = (props) => {
  //modal
  const { show, setShow } = props;
  const [maBN, setMaBN] = useState("");
  const [hoBN, setHoBN] = useState("");
  const [tenBN, setTenBN] = useState("");
  const [soDT, setSoDT] = useState("");
  const [email, setEmail] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState("Nam");
  const [diaChi, setDiaChi] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  useEffect(() => {
    setMaBN("");
    setHoBN("");
    setTenBN("");
    setSoDT("");
    setEmail("");
    setNgaySinh("");
    setGioiTinh("Nam");
    setDiaChi("");
    setGhiChu("");
  }, [show]);
  const handleSubmit = async (e) => {
    // Thực hiện xử lý gửi dữ liệu đi ở đây, ví dụ: gọi hàm để lưu thông tin bệnh nhân
    let res = await postCreatePatient(
      maBN,
      hoBN,
      tenBN,
      soDT,
      email,
      ngaySinh,
      gioiTinh,
      diaChi,
      ghiChu
    );
    console.log(res);
    if (res?.errCode == 0) {
      setShow(false);
      toast.success("🦄Tạo mới bệnh nhân thành công!");
      await props.fetchListPatient();
    } else if (res?.errCode == 2) {
      toast.error("🦄Tạo mới bệnh nhân thất bại! Mã bệnh nhân đã tồn tại!");
    } else {
      toast.error("🦄Tạo mới bệnh nhân thất bại!");
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
          <Modal.Title>Thêm bệnh nhân mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaBN" className="form-label">
                Mã Bệnh Nhân (Số nguyên)
              </label>
              <input
                type="text"
                className="form-control"
                id="MaBN"
                name="MaBN"
                value={maBN}
                onChange={(e) => setMaBN(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="HoBN" className="form-label">
                Họ
              </label>
              <input
                type="text"
                className="form-control"
                id="HoBN"
                name="HoBN"
                value={hoBN}
                onChange={(e) => setHoBN(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenBN" className="form-label">
                Tên
              </label>
              <input
                type="text"
                className="form-control"
                id="TenBN"
                name="TenBN"
                value={tenBN}
                onChange={(e) => setTenBN(e.target.value)}
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
              <label htmlFor="NgaySinh" className="form-label">
                Ngày Sinh (Tháng/Ngày/Năm)
              </label>
              <input
                type="date"
                className="form-control"
                id="NgaySinh"
                name="NgaySinh"
                value={ngaySinh}
                onChange={(e) => setNgaySinh(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="GioiTinh" className="form-label">
                Giới Tính
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
              <label htmlFor="DiaChi" className="form-label">
                Địa Chỉ
              </label>
              <textarea
                className="form-control"
                id="DiaChi"
                name="DiaChi"
                value={diaChi}
                onChange={(e) => setDiaChi(e.target.value)}
                required
              ></textarea>
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
            {/* <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleSubmit(e)}
              >
                Lưu Thông Tin
              </button> */}
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

export default ModalCreatePatient;
