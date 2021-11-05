import './Viewer.css';

function Viewer(props) {
  return (
    <div className="viewer">
      {props.children}
    </div>
  );
}

export default Viewer;