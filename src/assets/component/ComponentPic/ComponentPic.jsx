import "./ComponentPic.css";
import jessicaimg from '../../../../public/avatar-jessica.jpeg';
function ComponentPic() {
  return (
    <div className="avatar">
      <img src={jessicaimg} alt="Jessica's Avatar" className="avatar-image"/>
    </div>
  );
}

export default ComponentPic;