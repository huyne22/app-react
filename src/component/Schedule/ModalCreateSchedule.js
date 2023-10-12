import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateSchedule } from "../service/apiService";
import { toast } from "react-toastify";

const ModalCreateSchedule = (props) => {
  const { show, setShow } = props;
  const [ngay, setNgay] = useState("");
  const [buoi, setBuoi] = useState("");
  const [maBS, setMaBS] = useState("");
  const [soLuongBNToiDa, setSoLuongBNToiDa] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  useEffect(() => {
    setNgay("");
    setBuoi("");
    setMaBS("");
    setSoLuongBNToiDa("");
    setGhiChu("");
  }, [show]);
  const handleSubmit = async (e) => {
    let res = await postCreateSchedule(
      ngay,
      buoi,
      maBS,
      soLuongBNToiDa,
      ghiChu
    );
    if (res?.errCode == 0) {
      setShow(false);
      toast.success("🦄Tạo mới lịch trực thành công!");
      await props.fetchListSchedule();
    } else if (res?.errCode == 2) {
      toast.error("🦄Tạo mới lịch trực thất bại! Mã lịch trực đã tồn tại!");
    } else {
      toast.error("🦄Tạo mới lịch trực thất bại!");
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
          <Modal.Title>Thêm lịch trực mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
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
              <label htmlFor="MaBS" className="form-label">
                Mã Bác sĩ
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
              <label htmlFor="SoLuongBNToiDa" className="form-label">
                Số lượng Bệnh nhân tối đa
              </label>
              <input
                type="text"
                className="form-control"
                id="SoLuongBNToiDa"
                name="SoLuongBNToiDa"
                value={soLuongBNToiDa}
                onChange={(e) => setSoLuongBNToiDa(e.target.value)}
                required
              />
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
              />
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

export default ModalCreateSchedule;
