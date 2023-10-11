import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { postDeleteMedicalService } from "../service/apiService";
const ModalDeleteMedicalService = (props) => {
  const { dataUpdate, fetchListMedicalService, show2, setShow2 } = props;
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleSubmit2 = async (e) => {
    let a = { MaDV: dataUpdate.MaDV.toString() };
    let res = await postDeleteMedicalService(a);
    // console.log("res", res);
    if (res?.errCode == 0) {
      toast.success("Xóa dịch vụ y tế thành công!");
      await fetchListMedicalService();
    } else if (res?.errCode == 3) {
      toast.info("Không có trường dữ liệu nào được Xóa!");
    } else {
      toast.error("Xóa dịch vụ y tế thất bại!");
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
            <Modal.Title>Dịch vụ bạn muốn xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="MaDV" className="form-label">
                Mã Dịch vụ
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.MaDV}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenDV" className="form-label">
                Tên Dịch vụ
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.TenDV}
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
export default ModalDeleteMedicalService;
