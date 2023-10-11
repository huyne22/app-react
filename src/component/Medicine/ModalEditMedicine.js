import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditMedicine } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditMedicine = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [maThuoc, setMaThuoc] = useState("");
  const [tenThuoc, setTenThuoc] = useState("");
  const [congDung, setCongDung] = useState("");
  const [donVi, setDonVi] = useState("");
  const [soLuong, setSoLuong] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    // Tạo bản sao của đối tượng hiện tại để không ghi đè lên trực tiếp
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject); // Cập nhật đối tượng với thuộc tính mới
  };
  useEffect(() => {
    // console.log("dataUpdate");
    if (!_.isEmpty(dataUpdate)) {
      setMaThuoc(dataUpdate.MaThuoc);
      setTenThuoc(dataUpdate.TenThuoc);
      setCongDung(dataUpdate.CongDung);
      setDonVi(dataUpdate.DonVi);
      setSoLuong(dataUpdate.SoLuong);
      setGhiChu(dataUpdate.GhiChu);
      updateObjectWithNewProperty();
    } else {
    }
  }, [dataUpdate]);
  //ma
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaThuoc: maThuoc.toString(),
    }));
  }, [maThuoc]);
  //ten
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      TenThuoc: tenThuoc,
    }));
  }, [tenThuoc]);
  //motaDv
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      CongDung: congDung,
    }));
  }, [congDung]);
  //giatien
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      DonVi: donVi,
    }));
  }, [donVi]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      SoLuong: soLuong,
    }));
  }, [soLuong]);
  // ghiChu
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);

  const handleSubmit = async (e) => {
    let res = await postEditMedicine(yourObject);
    // console.log(res);
    if (res?.errCode == 0) {
      setShow1(false);
      toast.success("Cập nhật thuốc thành công!");
      await props.fetchListMedicine();
    } else if (res?.errCode == 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật thuốc thất bại!");
    }
  };

  const handleClose = () => {
    setShow1(false);
    // console.log("close");
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
          <Modal.Title>Chỉnh sửa thông tin thuốc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaThuoc" className="form-label">
                Mã thuốc
              </label>
              <input
                type="text"
                className="form-control"
                id="MaThuoc"
                name="MaThuoc"
                value={maThuoc}
                onChange={(e) => setMaThuoc(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenThuoc" className="form-label">
                Tên
              </label>
              <input
                type="text"
                className="form-control"
                id="TenThuoc"
                name="TenThuoc"
                value={tenThuoc}
                onChange={(e) => setTenThuoc(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="CongDung" className="form-label">
                Công dụng
              </label>
              <input
                type="text"
                className="form-control"
                id="CongDung"
                name="CongDung"
                value={congDung}
                onChange={(e) => setCongDung(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="DonVi" className="form-label">
                Đơn vị
              </label>
              <input
                type="text"
                className="form-control"
                id="DonVi"
                name="DonVi"
                value={donVi}
                onChange={(e) => setDonVi(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="SoLuong" className="form-label">
                Số lượng
              </label>
              <input
                type="text"
                className="form-control"
                id="SoLuong"
                name="SoLuong"
                value={soLuong}
                onChange={(e) => setSoLuong(e.target.value)}
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
export default ModalEditMedicine;
