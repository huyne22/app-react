import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import _ from "lodash";
import { toast } from "react-toastify";
import { postDeleteAppointment } from "../service/apiService";
const ModalDeleteAppointment = (props) => {
  const { dataUpdate, fetchListAppointment, show2, setShow2 } = props;
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleSubmit2 = async (e) => {
    let res = await postDeleteAppointment(
      dataUpdate.Ngay,
      dataUpdate.Buoi,
      dataUpdate.MaBS,
      dataUpdate.MaBN
    );
    console.log("res", res);
    if (res?.errCode == 0) {
      toast.success("Xóa phiếu cuộc hẹn thành công!");
      await fetchListAppointment();
    } else if (res?.errCode == 3) {
      toast.info("Không có trường dữ liệu nào được Xóa!");
    } else {
      toast.error("Xóa phiếu cuộc hẹn thất bại!");
    }
    handleClose2(); // Đóng modal sau khi xác nhận xóa
  };
  return (
    <>
      <div>
        <Modal
          size="lg"
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Lịch hẹn bạn muốn xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="Ngay" className="form-label">
                Ngày lịch hẹn
              </label>
              <input
                type="date"
                className="form-control"
                value={dataUpdate.Ngay}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Buoi" className="form-label">
                Buổi lịch hẹn
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.Buoi}
                disabled
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit2}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default ModalDeleteAppointment;
