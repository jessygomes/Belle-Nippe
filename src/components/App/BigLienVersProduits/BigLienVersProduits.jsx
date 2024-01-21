import './BigLienVersProduits.scss';

export default function BigLienVersProduits() {
    return (
        <section className='bigLien'>
            <div className='bigLien__vet'>
                <a className='bigLien__vetement1' href="">
                    Vête <br /> ment
                    {/* <p className='bigLien__textVet'>Vête <br />ment</p> */}
                </a>
                <a className='bigLien__vetement2' href="">
                    Accessoires
                    {/* <p className='bigLien__textVet2'>Accessoires</p> */}
                </a>
            </div>
            <p className='bigLien__text'>L'Upcycling, une pratique novatrice dans le monde de la mode, émerge comme une réponse créative et durable aux défis de la surconsommation. <br /> <br /> En transformant des matériaux préexistants en pièces uniques de haute couture, l'upcycling redéfinit les normes de l'industrie.</p>        
        </section>
    )
}