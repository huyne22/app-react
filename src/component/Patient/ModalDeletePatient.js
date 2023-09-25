import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { postDeletePatient } from "../service/apiService";
const ModalDeletePatient = (props) => {
  const { dataUpdate, fetchListPatient, show2, setShow2 } = props;
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleSubmit2 = async (e) => {
    let a = { MaBN: dataUpdate.MaBN.toString() };
    let res = await postDeletePatient(a);
    console.log("res", res);

    await fetchListPatient();
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
            <Modal.Title>Bệnh nhân bạn muốn xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="MaBN" className="form-label">
                Mã Bệnh Nhân
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.MaBN}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email Bệnh Nhân
              </label>
              <input
                type="email"
                className="form-control"
                value={dataUpdate.Email}
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
export default ModalDeletePatient;
