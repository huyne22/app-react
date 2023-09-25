import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { postDeleteSchedule } from "../service/apiService";
const ModalDeleteSchedule = (props) => {
  const { dataUpdate, fetchListSchedule, show2, setShow2 } = props;
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleSubmit2 = async (e) => {
    let a = { Ngay: dataUpdate.Ngay.toString() };
    console.log("a", dataUpdate.Ngay);
    let res = await postDeleteSchedule(
      dataUpdate.Ngay,
      dataUpdate.Buoi,
      dataUpdate.MaBS
    );
    console.log("res", res);

    await fetchListSchedule();
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
