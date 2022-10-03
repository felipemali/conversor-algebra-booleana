import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import OR from "../../assets/img/OR.png";
import AND from "../../assets/img/AND.png";
import NOT from "../../assets/img/NOT.png";
import NAND from "../../assets/img/NAND.png";
import NOR from "../../assets/img/NOR.png";
import Typography from "@mui/material/Typography";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Funcoes = () => {
  SwiperCore.use([Autoplay]);

  return (
    <Box sx={{ mt: 15, width: 300, ml: "auto", mr: "auto" }}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Box>
            <Card variant="outlined">
              <Typography
                sx={{ fontSize: 20, textAlign: "center" }}
                color="text.secondary"
                gutterBottom
              >
                Função OR
              </Typography>
              <img
                style={{
                  margin: "auto",
                  display: "block",
                }}
                src={OR}
                alt="imagem de uma porta lógica OR"
              />
            </Card>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Card variant="outlined">
              <Typography
                sx={{ fontSize: 20, textAlign: "center" }}
                color="text.secondary"
                gutterBottom
              >
                Função AND
              </Typography>
              <img
                style={{
                  margin: "auto",
                  display: "block",
                }}
                src={AND}
                alt="imagem de uma porta lógica AND"
              />
            </Card>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Card variant="outlined">
              <Typography
                sx={{ fontSize: 20, textAlign: "center" }}
                color="text.secondary"
                gutterBottom
              >
                Função NOT
              </Typography>
              <img
                style={{
                  margin: "auto",
                  display: "block",
                }}
                src={NOT}
                alt="imagem de uma porta lógica NOT"
              />
            </Card>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Card variant="outlined">
              <Typography
                sx={{ fontSize: 20, textAlign: "center" }}
                color="text.secondary"
                gutterBottom
              >
                Função NAND
              </Typography>
              <img
                style={{
                  margin: "auto",
                  display: "block",
                }}
                src={NAND}
                alt="imagem de uma porta lógica NAND"
              />
            </Card>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Card variant="outlined">
              <Typography
                sx={{ fontSize: 20, textAlign: "center" }}
                color="text.secondary"
                gutterBottom
              >
                Função NOR
              </Typography>
              <img
                style={{
                  margin: "auto",
                  display: "block",
                }}
                src={NOR}
                alt="imagem de uma porta lógica NOR"
              />
            </Card>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Funcoes;
