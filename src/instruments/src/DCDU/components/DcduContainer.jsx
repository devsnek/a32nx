/* eslint-disable react/prop-types */
import './DcduContainer.css';

export function DcduContainer({
  top, left, middle, right,
}) {
  return (
    <>
      <div className="dcdu-container">
        <div className="dcdu-container-top">{top}</div>
        <div className="dcdu-container-left">{left}</div>
        <div className="dcdu-container-middle">{middle}</div>
        <div className="dcdu-container-right">{right}</div>
      </div>
    </>
  );
}
