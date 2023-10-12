import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditScheduleNurse } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditScheduleNurse = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [ngay, setNgay] = useState("");
  const [buoi, setBuoi] = useState("");
  const [maYTa, setMaYTa] = useState("");
  const [soLuongBNToiDa, setSoLuongBNToiDa] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject);
  };
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setNgay(dataUpdate.Ngay.split("T")[0]);
      setBuoi(dataUpdate.Buoi);
      setMaYTa(dataUpdate.MaYTa);
      setSoLuongBNToiDa(dataUpdate.SoLuongBNToiDa);
      setGhiChu(dataUpdate.GhiChu);
      updateObjectWithNewProperty();
    } else {
    }
  }, [dataUpdate]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Ngay: ngay.toString(),
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
      MaYTa: maYTa,
    }));
  }, [maYTa]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      SoLuongBNToiDa: soLuongBNToiDa,
    }));
  }, [soLuongBNToiDa]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);

  const handleSubmit = async (e) => {
    let res = await postEditScheduleNurse(yourObject);
    if (res?.errCode === 0) {
      setShow1(false);
      toast.success("Cập nhật lịch trực thành công!");
      await props.fetchListSchedule();
    } else if (res?.errCode === 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật lịch trực thất bại!");
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
          <Modal.Title>Chỉnh sửa thông tin lịch trực</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
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
              <label htmlFor="MaYTa" className="form-label">
                Mã y tá
              </label>
              <input
                type="text"
                className="form-control"
                id="MaYTa"
                name="MaYTa"
                value={maYTa}
                onChange={(e) => setMaYTa(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="SoLuongBNToiDa" className="form-label">
                Số lượng bệnh nhân tối đa
              </label>
              <input
                type="text"
                className="form-control"
                id="SoLuongBNToiDa"
                name="SoLuongBNToiDa"
                value={soLuongBNToiDa}
                onChange={(e) => setSoLuongBNToiDa(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="GhiChu" className="form-label">
                Ghi chú
              </label>
              <textarea
                className="form-control"
                id="GhiChu"
                name="GhiChu"
                value={ghiChu}
                onChange={(e) => setGhiChu(e.target.value)}
              />
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
export default ModalEditScheduleNurse;
