import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="teal" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="teal" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

// Card.defaultProps = {
//   reverse: false,
// };
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
