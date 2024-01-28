import { Link } from 'react-router-dom';
import './ProduitForEdit.scss';

export default function ProduitForEdit() {
    return (
        <div className='div__edit'>
            <Link to="/editorial/:nameCollection">
                <article className='produitForEdit'>
                    <div className='produitForEdit__imgContainer'>
                      <img className='produitForEdit__photo' src="/fond-candy.png" alt="" />
                    </div>
                    <h3 className='produitForEdit__name'>Collection Candy</h3>
                </article>
            </Link>   
        </div>
    )
}