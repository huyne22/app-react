import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { postDeleteExamination } from "../service/apiService";
const ModalDeleteExamination = (props) => {
  const { dataUpdate, fetchListExamination, show2, setShow2 } = props;
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleSubmit2 = async (e) => {
    let res = await postDeleteExamination(
      dataUpdate.MaBS,
      dataUpdate.MaBN,
      dataUpdate.Ngay,
      dataUpdate.Buoi
    );
    console.log("res", res);

    await fetchListExamination();
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
            <Modal.Title>Phiếu khám bệnh bạn muốn xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="MaBN" className="form-label">
                Mã bệnh nhân
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.MaBN}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="KetQuaChuanDoanBenh" className="form-label">
                Kết quả chuẩn đoán bệnh
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.KetQuaChuanDoanBenh}
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
export default ModalDeleteExamination;
