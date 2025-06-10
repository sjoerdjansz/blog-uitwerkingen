import "./Card.css";

export function Card({ title, author, comments, shares, date, onClick }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  }

  return (
    <article className="card">
      <div className="card__title-container">
        <h4>{title}</h4>
        <p>({author})</p>
      </div>
      <div className="card__content-container">
        <p>
          {comments} reacties – {shares} keer gedeeld
        </p>
        <p>Published: {formatDate(date)}</p>
      </div>
    </article>
  );
}
