import "./PagesNumber.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PagesNumber = ({ currentPageNumber, pageNumber, setPageNumber }) => {
  return (
    <span
      className={
        currentPageNumber === pageNumber
          ? "button-selected"
          : "button-not-selected"
      }
      onClick={() => {
        setPageNumber(currentPageNumber);
      }}
    >
      <FontAwesomeIcon className="page-button" icon="circle" />
    </span>
  );
};
export default PagesNumber;
