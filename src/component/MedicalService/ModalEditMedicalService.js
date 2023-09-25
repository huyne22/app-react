import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditMedicalService } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditMedicalService = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [maDV, setMaDV] = useState("");
  const [tenDV, setTenDV] = useState("");
  const [moTaDV, setMoTaDV] = useState("");
  const [giaTien, setGiaTien] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    // Tạo bản sao của đối tượng hiện tại để không ghi đè lên trực tiếp
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject); // Cập nhật đối tượng với thuộc tính mới
  };
  useEffect(() => {
    console.log("dataUpdate");
    if (!_.isEmpty(dataUpdate)) {
      setMaDV(dataUpdate.MaDV);
      setTenDV(dataUpdate.TenDV);
      setMoTaDV(dataUpdate.MoTaDV);
      setGiaTien(dataUpdate.GiaTien);
      setGhiChu(dataUpdate.GhiChu);
      updateObjectWithNewProperty();
    } else {
    }
  }, [dataUpdate]);
  //ma
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaDV: maDV.toString(),
    }));
  }, [maDV]);
  //ten
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      TenDV: tenDV,
    }));
  }, [tenDV]);
  //motaDv
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MoTaDV: moTaDV,
    }));
  }, [moTaDV]);
  //giatien
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GiaTien: giaTien,
    }));
  }, [giaTien]);
  // ghiChu
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);

  const handleSubmit = async (e) => {
    let res = await postEditMedicalService(yourObject);
    console.log(res);
    if (res?.errCode == 0) {
      setShow1(false);
      toast.success("Cập nhật dịch vụ thành công!");
      await props.fetchListMedicalService();
    } else if (res?.errCode == 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật dịch vụ thất bại!");
    }
  };

  const handleClose = () => {
    setShow1(false);
    console.log("close");
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
          <Modal.Title>Chỉnh sửa thông tin dịch vụ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaDV" className="form-label">
                Mã dịch vụ
              </label>
              <input
                type="text"
                className="form-control"
                id="MaDV"
                name="MaDV"
                value={maDV}
                onChange={(e) => setMaDV(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenDV" className="form-label">
                Tên
              </label>
              <input
                type="text"
                className="form-control"
                id="TenDV"
                name="TenDV"
                value={tenDV}
                onChange={(e) => setTenDV(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="MoTaDV" className="form-label">
                Mô tả dịch vụ
              </label>
              <input
                type="text"
                className="form-control"
                id="MoTaDV"
                name="MoTaDV"
                value={moTaDV}
                onChange={(e) => setMoTaDV(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="GiaTien" className="form-label">
                GiaTien
              </label>
              <input
                type="text"
                className="form-control"
                id="GiaTien"
                name="GiaTien"
                value={giaTien}
                onChange={(e) => setGiaTien(e.target.value)}
              />
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
export default ModalEditMedicalService;
