import './Viewer.scss';

function Viewer(props) {
  return (
    <div className="viewer">
      {props.children}
    </div>
  );
}

export default Viewer;