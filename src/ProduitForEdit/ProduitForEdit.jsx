import { Link } from 'react-router-dom';
import './ProduitForEdit.scss';

export default function ProduitForEdit() {
    return (
        <div className='div__edit'>
            <Link to="/editorial/collection">
                <article className='produitForEdit'>
                    <div className='produitForEdit__imgContainer' >
                        <a href="/editorial/collection"><img className='produitForEdit__photo' src="/public/fond-candy.png" alt="" /></a>
                    </div>
                    <h3 className='produitForEdit__name'>Collection Candy</h3>
                </article>
            </Link>   
        </div>
    )
}