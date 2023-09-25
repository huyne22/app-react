import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateExamination } from "../service/apiService";
import { toast } from "react-toastify";

const ModalCreateExamination = (props) => {
  //modal
  const { show, setShow } = props;
  const [maBS, setMaBS] = useState("");
  const [maBN, setMaBN] = useState("");
  const [ngay, setNgay] = useState("");
  const [buoi, setBuoi] = useState("");
  const [maYTa, setMaYTa] = useState("");
  const [ketQuaChuanDoanBenh, setKetQuaChuanDoanBenh] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  useEffect(() => {
    setMaBS("");
    setMaBN("");
    setNgay("");
    setBuoi("");
    setMaYTa("");
    setKetQuaChuanDoanBenh("");
    setGhiChu("");
  }, [show]);
  const handleSubmit = async (e) => {
    // Thực hiện xử lý gửi dữ liệu đi ở đây, ví dụ: gọi hàm để lưu thông tin phiếu khám bệnh
    let res = await postCreateExamination(
      maBS,
      maBN,
      ngay,
      buoi,
      maYTa,
      ketQuaChuanDoanBenh,
      ghiChu
    );
    console.log(res);
    if (res?.errCode == 0) {
      setShow(false);
      toast.success("🦄Tạo mới phiếu khám bệnh thành công!");
      await props.fetchListExamination();
    } else if (res?.errCode == 2) {
      toast.error(
        "🦄Tạo mới phiếu khám bệnh thất bại! Mã phiếu khám bệnh đã tồn tại!"
      );
    } else {
      toast.error("🦄Tạo mới phiếu khám bệnh thất bại!");
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
          <Modal.Title>Thêm phiếu khám bệnh mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaBS" className="form-label">
                Mã bác sĩ
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
              <label htmlFor="MaYTa" className="form-label">
                Mã y tá
              </label>
              <input
                type="text"
                className="form-control"
                id="MaYTa"
                name="MaYTa"
                value={maYTa}
                onChange={(e) => setMaYTa(e.target.value)}
                required
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="KetQuaChuanDoanBenh" className="form-label">
                Kết quả chuẩn đoán bệnh
              </label>
              <textarea
                className="form-control"
                id="KetQuaChuanDoanBenh"
                name="KetQuaChuanDoanBenh"
                value={ketQuaChuanDoanBenh}
                onChange={(e) => setKetQuaChuanDoanBenh(e.target.value)}
                required
              ></textarea>
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

export default ModalCreateExamination;
