import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreatePatientMedicalService } from "../service/apiService";
import { toast } from "react-toastify";

const ModalCreatePatientMedicalService = (props) => {
  const { show, setShow } = props;
  const [maBN, setMaBN] = useState("");
  const [maDV, setMaDV] = useState("");
  const [ngay, setNgay] = useState("");
  const [buoi, setBuoi] = useState("");
  const [soLuong, setSoLuong] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  useEffect(() => {
    setMaBN("");
    setMaDV("");
    setNgay("");
    setBuoi("");
    setSoLuong("");
    setGhiChu("");
  }, [show]);
  const handleSubmit = async (e) => {
    let res = await postCreatePatientMedicalService(
      maBN,
      maDV,
      ngay,
      buoi,
      soLuong,
      ghiChu
    );
    if (res?.errCode == 0) {
      setShow(false);
      toast.success("🦄Tạo mới bệnh nhân - dịch vụ thành công!");
      await props.fetchListPatientMedicalService();
    } else if (res?.errCode == 2) {
      toast.error(
        "🦄Tạo mới bệnh nhân - dịch vụ thất bại! Mã bệnh nhân - dịch vụ đã tồn tại!"
      );
    } else {
      toast.error("🦄Tạo mới bệnh nhân - dịch vụ thất bại!");
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
          <Modal.Title>Thêm bệnh nhân - dịch vụ mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaBN" className="form-label">
                Mã bệnh nhân
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
              <label htmlFor="MaDV" className="form-label">
                Mã dịch vụ
              </label>
              <input
                type="text"
                className="form-control"
                id="MaDV"
                name="MaDV"
                value={maDV}
                onChange={(e) => setMaDV(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Ngay" className="form-label">
                Ngày
              </label>
              <input
                type="date"
                className="form-control"
                id="Ngay"
                name="Ngay"
                value={ngay}
                onChange={(e) => setNgay(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Buoi" className="form-label">
                Buổi
              </label>
              <input
                type="text"
                className="form-control"
                id="Buoi"
                name="Buoi"
                value={buoi}
                onChange={(e) => setBuoi(e.target.value)}
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
                Ghi chú
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

export default ModalCreatePatientMedicalService;
