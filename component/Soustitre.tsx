interface SousTitle {
    STitre : string,
}
const Soustitre = ({STitre  } : SousTitle) => {

    return (

        <div>       
            <p className="py-6 text-red-600 text-center">
                
                {STitre}
              
            </p>
        </div>
    );


}
export default Soustitre