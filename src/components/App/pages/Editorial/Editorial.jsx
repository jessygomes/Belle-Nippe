import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import ProduitForEdit from '../../ProduitForEdit/ProduitForEdit';
import './Editorial.scss';

export default function Editorial() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = { type: 'GET_COLLECTIONS_FROM_API' };
    dispatch(action);
  }, [dispatch]);

  const collections = useSelector((state) => state.collection.listCollections);

  return (
    <div>
      <Helmet>
        <title>Editorial | Belle Nippe</title>
        <meta
          name=" Page Editorial | Belle Nippe"
          content="Toutes les collections de la marque Belle Nippe"
        />
      </Helmet>
      <div className="pageEdit">
        <h2 className="titlePage">Editorial</h2>
      </div>
      <div className="editorial">
        {collections.map((collection) => (
          <ProduitForEdit
            key={collection.id}
            collectionId={collection.id}
            collectionName={collection.title_collection}
          />
        ))}
      </div>
    </div>
  );
}
