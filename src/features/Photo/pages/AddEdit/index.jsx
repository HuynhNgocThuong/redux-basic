import React from "react";
import PropTypes from "prop-types";
import PhotoForm from "../../components/PhotoForm";
import Banner from "../../../../components/Banner";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { addPhoto } from "features/Photo/photoSlice";
import { useHistory } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispath = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const action = addPhoto(values);
        dispath(action);
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit}></PhotoForm>
      </div>
    </div>
  );
}

export default AddEditPage;
