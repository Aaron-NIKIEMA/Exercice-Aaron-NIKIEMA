import Link from "next/link";


interface BtConnect {
    Connexion : string,
    Inscription : string,

}
const Access = ({Connexion , Inscription  } : BtConnect) => {

  return (

        <div className="m-4 flex justify-center">


              <Link
                href={"/connexion"}
                className="btn btn-sm md:btn-md btn-outline btn-accent"
              >
                { Connexion}
               
              </Link>
              <Link
                href={"/inscription"}
                className="btn btn-sm md:btn-md ml-2 btn-accent"
              >
                { Inscription}
               
              </Link>
        
          </div>


  );
}


export default Access