import React from "react";
import Media from "./Media";

function CameraMap(props) {
    const { handleCameraChange } = props;
    return (
        <div className="map" style={{ position: "absolute", zIndex: 10 }}>
            <img
                alt="Карта"
                draggable="false"
                src={Media.Images.Map}
                style={{ zIndex: "1", width: "100%" }}
                useMap="#map"
            />
            <a
                href=""
                onClick={handleCameraChange}
                title="Stage"
                style={{
                    position: "absolute",
                    left: "27.25%",
                    top: "5%",
                    width: "18.5%",
                    height: "9.25%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    //padding: "5px"
                }}
            >Сцена</a>
            <a
                href=""
                onClick={handleCameraChange}
                title="Restrooms"
                style={{
                    position: "absolute",
                    left: "79.75%",
                    top: "24.25%",
                    width: "18.5%",
                    height: "8.25%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    //padding: "5px"
                }}
            >Туалеты</a>
            <a
                href=""
                onClick={handleCameraChange}
                title="Dinning Area"
                style={{
                    position: "absolute",
                    left: "24%",
                    top: "20.5%",
                    width: "21.25%",
                    height: "13.25%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    //padding: "5px"
                }}
            ><p
                style={{
                    // position: "absolute",
                    // top: "50%",
                    // left: "50%",
                    // transform: "translate(-50%, -88%)"
                }}
            >Столовая</p></a>
            <a
                href=""
                onClick={handleCameraChange}
                title="Backstage"
                style={{
                    position: "absolute",
                    left: "0%",
                    top: "26%",
                    width: "18.5%",
                    height: "9%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    padding: "5px"
                }}
            ><p
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -88%)"
                }}
            >Закулисье</p></a>
            <a
                href=""
                onClick={handleCameraChange}
                title="Pirate Cove"
                style={{
                    position: "absolute",
                    left: "8%",
                    top: "39.5%",
                    width: "16.75%",
                    height: "9%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    padding: "5px"
                }}
            ><p
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -88%)"
                }}
            >Фокси</p></a>
            <a
                href=""
                onClick={handleCameraChange}
                title="Supply Closet"
                style={{
                    position: "absolute",
                    left: "8.25%",
                    top: "62.5%",
                    width: "18.5%",
                    height: "8.25%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    //padding: "5px"
                }}
            >Подвал</a>
            <a
                href=""
                onClick={handleCameraChange}
                title="West Hall"
                style={{
                    position: "absolute",
                    left: "26.5%",
                    top: " 70.5%",
                    width: "18.5%",
                    height: "9.25%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    //padding: "5px"
                }}
            >Западный коридор</a>
            <a
                href=""
                onClick={handleCameraChange}
                title="East Hall"
                style={{
                    position: "absolute",
                    left: "49%",
                    top: "70%",
                    width: "38.5%",
                    height: "9.5%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    padding: "5px"
                }}
            ><p
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -88%)"
                }}
            >Восточный коридор</p></a>
            <a
                href=""
                onClick={handleCameraChange}
                title="W. Hall Corner"
                style={{
                    position: "absolute",
                    left: "17%",
                    top: "80%",
                    width: "20%",
                    height: "8.25%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    padding: "5px"
                }}
            ><p
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -88%)"
                }}
            >Левая дверь</p></a>
            <a
                href=""
                onClick={handleCameraChange}
                title="E. Hall Corner"
                style={{
                    position: "absolute",
                    left: "50.25%",
                    top: "82.25%",
                    width: "24.5%",
                    height: "7%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    padding: "5px"
                }}
            ><p
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -88%)"
                }}
            >Правая дверь</p></a>
            <a
                href=""
                onClick={handleCameraChange}
                title="Kitchen"
                style={{
                    position: "absolute",
                    left: "79.5%",
                    top: "57.75%",
                    width: "14.25%",
                    height: "9.25%",
                    zIndex: 2,
                    color: "white",
                    fontWeight: 900,
                    background: "#424242",
                    textAlign: "center",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    padding: "5px"
                }}
            ><p
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -88%)"
                }}
            >Кухня</p></a>
        </div>
    );
}

export default CameraMap;
