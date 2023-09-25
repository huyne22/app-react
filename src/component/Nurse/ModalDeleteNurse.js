import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { postDeleteNurse } from "../service/apiService";
const ModalDeleteNurse = (props) => {
  const { dataUpdate, fetchListNurse, show2, setShow2 } = props;
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleSubmit2 = async (e) => {
    let a = { MaYT: dataUpdate.MaYT.toString() };
    let res = await postDeleteNurse(a);
    console.log("res", res);

    await fetchListNurse();
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
            <Modal.Title>Y tá bạn muốn xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="MaYT" className="form-label">
                Mã Y tá
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.MaYT}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email Y tá
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
export default ModalDeleteNurse;
