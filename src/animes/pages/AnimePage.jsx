import Card from "../../ui/components/Card";

const AnimePage = () => {
  const cardData = {
    image: "https://themewagon.github.io/anime/img/trending/trend-1.jpg",
    ep: "18 / 18",
    comments: 11,
    views: 9141,
    title: "Sen to Chihiro no Kamikakushi",
    tags: ["Active", "Movie"],
    link: "#",
  };
  return (
    <>
      <div className="row">
        <Card {...cardData} />
      </div>
    </>
  );
};

export default AnimePage;
