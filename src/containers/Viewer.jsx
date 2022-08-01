import '../styles/containers/Viewer.scss';


export function Viewer(props) {
  return (
    <div className="viewer">
      {props.children}
    </div>
  );
}
