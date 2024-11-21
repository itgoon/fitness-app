import Carousel from 'react-material-ui-carousel';

// const item = () => {

//     return (
//         <Stack position={'relative'} gap={2}>
//           <img
//             style={{ height: 314, objectFit: 'cover' }}
//             src={imageUrls[imgIndex]}
//             alt={content || 'Image'}
//           />

//           <Chip
//             variant={'soft'}
//             color={'secondary'}
//             label={`# ${content}`}
//             sx={{ position: 'absolute', bottom: 52, left: 16 }}
//           />
//           <Typography
//             textAlign={'center'}
//             color={white}
//             variant={'Body15/Bold'}
//           >
//             <span>{imgIndex + 1} </span>
//             <span
//               style={{ color: grey400, fontWeight: 400 }}
//             >{` / ${totalCount}`}</span>
//           </Typography>
//         </Stack>
//     )
// }

export default function CustomCarousel({ list, content, imgIndex }) {
  return (
    <Carousel
      height={330}
      autoPlay={false}
      indicators={false}
      next={(next, active) => console.log(next)}
      prev={(prev, active) => console.log(prev)}
    ></Carousel>
  );
}
