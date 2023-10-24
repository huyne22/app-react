import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditUser } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditUser = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [maNguoiDung, setMaNguoiDung] = useState("");
  const [tenDangNhap, setTenDangNhap] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject);
  };
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setMaNguoiDung(dataUpdate.MaNguoiDung);
      setTenDangNhap(dataUpdate.TenDangNhap);
      setGhiChu(dataUpdate.GhiChu);
      updateObjectWithNewProperty();
    } else {
    }
  }, [dataUpdate]);

  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaNguoiDung: maNguoiDung,
    }));
  }, [maNguoiDung]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      TenDangNhap: tenDangNhap,
    }));
  }, [tenDangNhap]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);

  const handleSubmit = async (e) => {
    let res = await postEditUser(yourObject);
    console.log("", res);
    if (res?.errCode === 0) {
      setShow1(false);
      toast.success("Cập nhật người dùng thành công!");
      await props.fetchListUser();
    } else if (res?.errCode === 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật người dùng thất bại!");
    }
  };

  const handleClose = () => {
    setShow1(false);
  };
  return (
    <>
      <Modal
        size="lg"
        show={show1}
        onHide={() => handleClose(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa thông tin người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="TenDangNhap" className="form-label">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="form-select"
                id="TenDangNhap"
                name="TenDangNhap"
                value={tenDangNhap}
                onChange={(e) => setTenDangNhap(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="MaNguoiDung" className="form-label">
                Mã người dùng
              </label>
              <input
                className="form-control"
                id="MaNguoiDung"
                name="MaNguoiDung"
                value={maNguoiDung}
                onChange={(e) => setMaNguoiDung(e.target.value)}
                disabled
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="GhiChu" className="form-label">
                Ghi Chú
              </label>
              <textarea
                className="form-control"
                id="GhiChu"
                name="GhiChu"
                value={ghiChu}
                onChange={(e) => setGhiChu(e.target.value)}
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEditUser;
