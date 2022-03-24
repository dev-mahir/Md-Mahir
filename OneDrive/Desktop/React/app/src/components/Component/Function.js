import React from "react";

function Myfunc(props) {
    const{name, age} = props;
    return <div>
        <div>
            Hi I am {name} and I am now {age};
        </div>
    </div>;
}
export default Myfunc;
