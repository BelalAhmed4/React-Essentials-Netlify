//! Props Based Fucntion
 function CoreConcept({image, title,description}) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} />
    </li>
  );
}
export default CoreConcept;