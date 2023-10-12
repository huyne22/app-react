import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateMedicalService } from "../service/apiService";
import { toast } from "react-toastify";

const ModalCreateMedicalService = (props) => {
  const { show, setShow } = props;
  const [maDV, setMaDV] = useState("");
  const [tenDV, setTenDV] = useState("");
  const [moTaDV, setMoTaDV] = useState("");
  const [giaTien, setGiaTien] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  useEffect(() => {
    setMaDV("");
    setTenDV("");
    setGhiChu("");
    setGiaTien("");
    setMoTaDV("");
  }, [show]);
  const handleSubmit = async (e) => {
    let res = await postCreateMedicalService(
      maDV,
      tenDV,
      moTaDV,
      giaTien,
      ghiChu
    );
    if (res?.errCode == 0) {
      setShow(false);
      toast.success("🦄Tạo mới dịch vụ thành công!");
      await props.fetchListMedicalService();
    } else if (res?.errCode == 2) {
      toast.error("🦄Tạo mới dịch vụ thất bại! Mã dịch vụ đã tồn tại!");
    } else {
      toast.error("🦄Tạo mới dịch vụ thất bại!");
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
          <Modal.Title>Thêm dịch vụ mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="maDV" className="form-label">
                Mã dịch vụ (Số nguyên)
              </label>
              <input
                type="text"
                className="form-control"
                id="maDV"
                name="maDV"
                value={maDV}
                onChange={(e) => setMaDV(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tenDV" className="form-label">
                Tên
              </label>
              <input
                type="text"
                className="form-control"
                id="tenDV"
                name="tenDV"
                value={tenDV}
                onChange={(e) => setTenDV(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="MoTaDV" className="form-label">
                Mô tả dịch vụ
              </label>
              <input
                type="text"
                className="form-control"
                id="MoTaDV"
                name="MoTaDV"
                value={moTaDV}
                onChange={(e) => setMoTaDV(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="GiaTien" className="form-label">
                GiaTien
              </label>
              <input
                type="text"
                className="form-control"
                id="GiaTien"
                name="GiaTien"
                value={giaTien}
                onChange={(e) => setGiaTien(e.target.value)}
                required
              />
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

export default ModalCreateMedicalService;
