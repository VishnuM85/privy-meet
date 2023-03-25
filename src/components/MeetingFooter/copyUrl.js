import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import "./copyUrl.css";

function CopyUrl(){
    const location = useLocation();
  const [trimmedUrl, setTrimmedUrl] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText("https://privy-676869-meet.onrender.com/"+trimmedUrl);
  };

  const searchd = location.search;
  React.useEffect(() => {
    setTrimmedUrl(searchd); 
  }, [searchd]);

    return (
      <div>
        <span>
        <button title="meet url" className="copyButton" onClick={handleCopy}>Copy meet Id</button>
        </span>
      </div>
    );
}

export default CopyUrl