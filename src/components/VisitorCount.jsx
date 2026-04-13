import React, { useEffect, useState } from "react";

const VisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/prateek-gargs-team/first-counter-3724/up")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="visitorBox">

 
    <div className="visitorCount">
      {/* You are # <span className="count">{count} </span>Visitors */}
      ✨ You are visitor #{count}
    </div>
    </div>
  );
};

export default VisitorCount;