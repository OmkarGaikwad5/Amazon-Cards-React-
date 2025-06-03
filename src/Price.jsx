export default function Price({ oldPrice, newPrice }) {
    let styles = {
        textDecoration: "line-through"
    };

    let newStyle = {
        fontWeight: "bold"
    };
    let styles1 = {
        backgroundColor: "#e0c367",
        height: "50px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px"
    };
    return (
      
        <div style={styles1}>
            <span style={styles}>Old Price: {oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>New Price: {newPrice}</span>
        </div>
    );
}