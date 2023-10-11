import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { postDeleteMedicine } from "../service/apiService";
const ModalDeleteMedicine = (props) => {
  const { dataUpdate, fetchListMedicine, show2, setShow2 } = props;
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleSubmit2 = async (e) => {
    let a = { MaThuoc: dataUpdate.MaThuoc.toString() };
    let res = await postDeleteMedicine(a);
    // console.log("res", res);
    if (res?.errCode == 0) {
      toast.success("Xóa thuốc thành công!");
      await fetchListMedicine();
    } else if (res?.errCode == 3) {
      toast.info("Không có trường dữ liệu nào được Xóa!");
    } else {
      toast.error("Xóa thuốc thất bại!");
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
            <Modal.Title>Thuốc bạn muốn xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="MaThuoc" className="form-label">
                Mã Thuốc
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.MaThuoc}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenThuoc" className="form-label">
                Tên Thuốc
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.TenThuoc}
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
export default ModalDeleteMedicine;
