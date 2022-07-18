const SideBar = (props) => {
  return (
    <div className={props.className}>
      <div className="sideBar__proifle">
        <a>Profile</a>
      </div>
      <div className="sideBar__message">
        <a>Message</a>
      </div>
      <div className="sideBar__news">
        <a>News</a>
      </div>
      <div className="sideBar__music">
        <a>Music</a>
      </div>
      <div className="sideBar__settings">
        <a>Setting</a>
      </div>
    </div>
  );
};

export { SideBar };
