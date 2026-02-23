import React from "react";


interface TitrePage {
    Titre : string,
}
const Titre = ({Titre  } : TitrePage) => {

    return (

        <div>       
            <h1 className="text-4xl md:text-5xl text-purple-600 font-bold text-center">
                {Titre} 
            </h1>
        </div>
    );


}
export default Titre