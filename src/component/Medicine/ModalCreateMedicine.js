import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateMedicine } from "../service/apiService";
import { toast } from "react-toastify";

const ModalCreateMedicine = (props) => {
  const { show, setShow } = props;
  const [maThuoc, setMaThuoc] = useState("");
  const [tenThuoc, setTenThuoc] = useState("");
  const [congDung, setCongDung] = useState("");
  const [donVi, setDonVi] = useState("");
  const [soLuong, setSoLuong] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  useEffect(() => {
    setMaThuoc("");
    setTenThuoc("");
    setCongDung("");
    setDonVi("");
    setSoLuong("");
    setGhiChu("");
  }, [show]);
  const handleSubmit = async (e) => {
    let res = await postCreateMedicine(
      maThuoc,
      tenThuoc,
      congDung,
      donVi,
      soLuong,
      ghiChu
    );
    if (res?.errCode == 0) {
      setShow(false);
      toast.success("🦄Tạo mới thuốc thành công!");
      await props.fetchListMedicine();
    } else if (res?.errCode == 2) {
      toast.error("🦄Tạo mới thuốc thất bại! Mã thuốc đã tồn tại!");
    } else {
      toast.error("🦄Tạo mới thuốc thất bại!");
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
          <Modal.Title>Thêm thuốc mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaThuoc" className="form-label">
                Mã thuốc (Số nguyên)
              </label>
              <input
                type="text"
                className="form-control"
                id="MaThuoc"
                name="MaThuoc"
                value={maThuoc}
                onChange={(e) => setMaThuoc(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenThuoc" className="form-label">
                Tên
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
            <div className="mb-3">
              <label htmlFor="CongDung" className="form-label">
                Công dụng
              </label>
              <input
                type="text"
                className="form-control"
                id="CongDung"
                name="CongDung"
                value={congDung}
                onChange={(e) => setCongDung(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="DonVi" className="form-label">
                Đơn vị
              </label>
              <input
                type="text"
                className="form-control"
                id="DonVi"
                name="DonVi"
                value={donVi}
                onChange={(e) => setDonVi(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="SoLuong" className="form-label">
                Số lượng
              </label>
              <input
                type="text"
                className="form-control"
                id="SoLuong"
                name="SoLuong"
                value={soLuong}
                onChange={(e) => setSoLuong(e.target.value)}
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

export default ModalCreateMedicine;
