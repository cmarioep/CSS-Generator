import './GlassBackgroundViewer.css';

function GlassBackgroundViewer(props) {
  return (
    <div className="glassBackground">
      {props.children}
    </div>
  );
}

export default GlassBackgroundViewer;