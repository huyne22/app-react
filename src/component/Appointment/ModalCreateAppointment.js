import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateAppointment } from "../service/apiService";
import { toast } from "react-toastify";

const ModalCreateAppointment = (props) => {
  //modal
  const { show, setShow } = props;
  const [ngay, setNgay] = useState("");
  const [buoi, setBuoi] = useState("");
  const [maBS, setMaBS] = useState("");
  const [maBN, setMaBN] = useState("");

  useEffect(() => {
    setNgay("");
    setBuoi("");
    setMaBS("");
    setMaBN("");
  }, [show]);
  const handleSubmit = async (e) => {
    // Thực hiện xử lý gửi dữ liệu đi ở đây, ví dụ: gọi hàm để lưu thông tin lịch trực
    let res = await postCreateAppointment(ngay, buoi, maBS, maBN);
    // console.log("chek", res);
    if (res?.errCode == 0) {
      setShow(false);
      toast.success("🦄Tạo mới lịch hẹn thành công!");
      await props.fetchListAppointment();
    } else if (res?.errCode == 2) {
      toast.error("🦄Tạo mới lịch hẹn thất bại! Mã lịch hẹn đã tồn tại!");
    } else {
      toast.error("🦄Tạo mới lịch hẹn thất bại!");
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
          <Modal.Title>Thêm lịch hẹn mới</Modal.Title>
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

export default ModalCreateAppointment;
