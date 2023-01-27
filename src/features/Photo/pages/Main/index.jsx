// import Banner from "../../../../components/Banner";
import Banner from "components/Banner";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Images from "../../../../constants/images";
import { useSelector } from "react-redux";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  console.log("This is data photos: ", photos);
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;
