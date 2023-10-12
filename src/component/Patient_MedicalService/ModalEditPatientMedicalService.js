import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditPatientMedicalService } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditPatientMedicalService = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [maBN, setMaBN] = useState("");
  const [maDV, setMaDV] = useState("");
  const [ngay, setNgay] = useState("");
  const [buoi, setBuoi] = useState("");
  const [soLuong, setSoLuong] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject);
  };
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setMaBN(dataUpdate.MaBN);
      setMaDV(dataUpdate.MaDV);
      setNgay(dataUpdate.Ngay);
      setBuoi(dataUpdate.Buoi);
      setSoLuong(dataUpdate.SoLuong);
      setGhiChu(dataUpdate.GhiChu);
      updateObjectWithNewProperty();
    } else {
    }
  }, [dataUpdate]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaBN: maBN.toString(),
    }));
  }, [maBN]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaDV: maDV,
    }));
  }, [maDV]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Ngay: ngay,
    }));
  }, [ngay]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Buoi: buoi,
    }));
  }, [buoi]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      SoLuong: soLuong,
    }));
  }, [soLuong]);

  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);

  const handleSubmit = async (e) => {
    let res = await postEditPatientMedicalService(yourObject);
    if (res?.errCode == 0) {
      setShow1(false);
      toast.success("Cập nhật bệnh nhân - dịch vụ thành công!");
      await props.fetchListPatientMedicalService();
    } else if (res?.errCode == 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật bệnh nhân - dịch vụ thất bại!");
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
          <Modal.Title>Chỉnh sửa thông tin bệnh nhân - dịch vụ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaBN" className="form-label">
                Mã bệnh nhân
              </label>
              <input
                type="text"
                className="form-control"
                id="MaBN"
                name="MaBN"
                value={maBN}
                onChange={(e) => setMaBN(e.target.value)}
                disabled
              />
            </div>
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
              <label htmlFor="Ngay" className="form-label">
                Ngày
              </label>
              <input
                type="date"
                className="form-control"
                id="Ngay"
                name="Ngay"
                value={ngay}
                onChange={(e) => setNgay(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Buoi" className="form-label">
                Buổi
              </label>
              <input
                type="text"
                className="form-control"
                id="Buoi"
                name="Buoi"
                value={buoi}
                onChange={(e) => setBuoi(e.target.value)}
                disabled
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
export default ModalEditPatientMedicalService;
