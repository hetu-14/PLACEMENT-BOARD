import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


export default function Company() {
  const data = [
    { image: "/images/facebook.svg", title: 'Facebook', text: 'Facebook...', },
    { image: "/images/google.svg", title: 'Google', text: 'Google....', },
    { image: "/images/youtube.svg", title: 'Youtube', text: 'Youtube....' },
    { image: "/images/snapchat.svg", title: 'SnapChat', text: 'SnapChat....' },

  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };

  return (
    <div className='w-2/4 m-auto'>
      {/* <div>
        <List sx={style} aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="Carreer Development And Training" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Industry Collaboration For Upskilling" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Campus Drive And Interview Training" />
          </ListItem>
        </List>
      </div> */}
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-[#e7e8d1] h-[350px] text-black rounded-xl">
              <div className='h-full bg-[#f7f8f3] bg-transparent flex justify-center items-center rounded-t-xl'>
                <img src={d.image} alt="" className="h-46 w-46 rounded-full" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

  );
}
// const Company = () => {
//   return (
//     <div>Company</div>
//   )
// }

// export default Company