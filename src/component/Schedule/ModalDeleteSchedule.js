import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import _ from "lodash";
import { toast } from "react-toastify";
import { postDeleteSchedule } from "../service/apiService";
const ModalDeleteSchedule = (props) => {
  const { dataUpdate, fetchListSchedule, show2, setShow2 } = props;
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleSubmit2 = async (e) => {
    let a = { Ngay: dataUpdate.Ngay.toString() };
    let res = await postDeleteSchedule(
      dataUpdate.Ngay,
      dataUpdate.Buoi,
      dataUpdate.MaBS
    );
    if (res?.errCode == 0) {
      toast.success("Xóa lịch trực thành công!");
      await fetchListSchedule();
    } else if (res?.errCode == 3) {
      toast.info("Không có trường dữ liệu nào được Xóa!");
    } else {
      toast.error("Xóa lịch trực thất bại!");
    }
    handleClose2();
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
            <Modal.Title>Lịch trực bạn muốn xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="Ngay" className="form-label">
                Ngày lịch trực
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
                Buổi lịch trực
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
export default ModalDeleteSchedule;
