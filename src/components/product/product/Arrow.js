function Arrow({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        padding: "2px",
        marginTop: "100px",

        height: "200px",
        backgroundColor: "lightgray",

        opacity: disabled ? "0" : "1",
        userSelect: "none",
        color: "black",
      }}
    >
      {children}
    </button>
  );
}
export default Arrow;
