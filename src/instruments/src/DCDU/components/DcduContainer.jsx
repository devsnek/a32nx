/* eslint-disable react/prop-types */
import './DcduContainer.style.css';

export function DcduContainer({
  top, left, middle, right,
}) {
  return (
    <>
      <div className="dcdu__container">
        <div className="dcdu__container--top">{top}</div>
        <div className="dcdu__container--left">{left}</div>
        <div className="dcdu__container--middle">{middle}</div>
        <div className="dcdu__container--right">{right}</div>
      </div>
    </>
  );
}
