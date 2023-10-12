import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import _ from "lodash";
import { toast } from "react-toastify";
import { postDeleteUser } from "../service/apiService";
const ModalDeleteUser = (props) => {
  const { dataUpdate, fetchListUser, show2, setShow2 } = props;
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleSubmit2 = async (e) => {
    let a = { MaNguoiDung: dataUpdate.MaNguoiDung.toString() };
    let res = await postDeleteUser(a);
    if (res?.errCode == 0) {
      toast.success("Xóa người dùng thành công!");
      await fetchListUser();
    } else if (res?.errCode == 3) {
      toast.info("Không có trường dữ liệu nào được Xóa!");
    } else if (res?.errCode == 5) {
      toast.info("Không thể xóa tài khoản admin!");
    } else {
      toast.error("Xóa người dùng thất bại!");
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
            <Modal.Title>Người dùng bạn muốn xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="MaNguoiDung" className="form-label">
                Mã Người dùng
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.MaNguoiDung}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenDangNhap" className="form-label">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="form-control"
                value={dataUpdate.TenDangNhap}
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
export default ModalDeleteUser;
