import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const card = (
    <div className="proj-imgbx">
      {imgUrl && <img src={imgUrl} alt={title} />}
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return (
    <Col size={12} sm={6} md={4}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">
          {card}
        </a>
      ) : card}
    </Col>
  )
}