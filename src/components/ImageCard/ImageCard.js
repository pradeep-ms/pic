import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { NewComment, CommentList } from "../Comments/index";

import { likeImage, unlikeImage } from "../../store/actions";

function ImageCard(props) {
  const {
    setLike,
    setUnlike,
    data: { id, category, url, likes, liked, comments },
  } = props;

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="card">
      <div
        className="img-container"
        style={{ backgroundImage: `url(${url})` }}
        onClick={onOpenModal}
      ></div>
      <div className="flex-container">
        <div className="flex-item text-left">
          {likes}
          {liked ? (
            <button className="like-button" onClick={() => setUnlike(id)}>
              Unlike
            </button>
          ) : (
            <button className="like-button" onClick={() => setLike(id)}>
              Like
            </button>
          )}
        </div>
        <div className="flex-item text-right">{category}</div>
      </div>
      <NewComment imageId={id} />
      <CommentList comments={comments} />
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        classNames={{
          modal: "customModal",
        }}
      >
        <img className="modal-image" src={url} alt={category} />
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLike: (id) => dispatch(likeImage(id)),
    setUnlike: (id) => dispatch(unlikeImage(id)),
  };
};

export default connect(null, mapDispatchToProps)(ImageCard);
