import React, { useState } from 'react';

export default function TextForm(props) {
    //States:-|
    const [text, setText] = useState("Enter Here");
    // setText("heloooo");
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });
    const [btntext, setBtnText] = useState("Enable Dark Mode");


    //Functions:-|
    const handelOnChange = (e) => {
        console.log("Defined");
        setText(e.target.value);//To allow writing on the text area, as state does't allow to write directly.
    }

    const convertToUpper = () => {
        console.log("Clicked");
        // setText("Yo Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.SendshowAlert("Converted to uppercase", "success")
    }
    const convertToLower = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.SendshowAlert("Converted to lowercase", "success")
    }
    const clear = () => {
        let newText = "";
        setText(newText);
    }

    const toggleStyle = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtnText("Enable Light Mode")
        } else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText("Enable Dark Mode")
        }
    }

    const handleCopy=()=>{
        console.log("clicked")
        // navigator.clipboard.writeText(text);//Just copy with out selecting
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);

        console.log(text.value)
    }

    const extraSpace =()=>{
        let Ntext = text.split(/[ ]+/);
        setText(Ntext.join(" "));
    }


    return (
        <>
        <div style={{background:props.mode==="dark"?"#282c34":"white", color:props.mode==="dark"?"white":"black"}}>
            <div>
                <form>
                    <h1 className="fst-italic">{props.heading}</h1>
                    <div className="mb-3">
                        <textarea value={text} onChange={handelOnChange} 
                        style={{background:props.mode==="dark"?"#282c34":"white", color:props.mode==="dark"?"white":"black"}}
                            type="text" className="form-control" id="myBox" rows="4"></textarea>
                    </div>
                </form>
                <button onClick={convertToUpper}
                    className="btn btn-primary mx-2">Upper Case</button>
                <button onClick={convertToLower}
                    className="btn btn-primary mx-2">Lower Case</button>
                <button onClick={clear}
                    className="btn btn-primary mx-2">Clear</button>
                <button onClick={toggleStyle}
                    className="btn btn-primary mx-2">{btntext}</button>
                <button onClick={handleCopy}
                    className="btn btn-primary mx-2">Copy Text</button>
                <button onClick={extraSpace}
                    className="btn btn-primary mx-2">Remove Spaces</button>
            </div>
            <div className="container my-4">
                <p className="fw-bold fst-italic" style={myStyle}>Your Text Summary</p>
                {/* <h5>Total "{text.split(" ").length}" Words and "{text.length}" Characters</h5> */}
                <p>{text.split(" ").length-1 } words and {text.length} characters</p>   {/*{1000-text.length-1} */}
                <h5>{0.008 * text.split(" ").length} Minutes to read the text</h5>
                <h1 className="fw-bold fst-italic">Preview of the Text you Entered</h1>
                <h5>{text.length>0?text:"Enter text above to Review"}</h5>
            </div>
            </div>
        </>
    )
}

