
const ColorBox = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color,
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        margin: "10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
      }}
    >
        Box
    </div>
  );
};

export default ColorBox;
