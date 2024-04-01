import './Error.scss';

export default function Error() {
  return (
    <div>
      <div className="error">
        <h2 className="error__title">Erreur</h2>
        <p className="error__message">
          Nous sommes désolé, une erreur s'est produite.
        </p>
      </div>
    </div>
  );
}
