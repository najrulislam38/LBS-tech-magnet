import projectimg1 from "./../../../assets/images/project-image/project-image.jpg";
import projectimg2 from "./../../../assets/images/project-image/project-image-2.jpg";
import projectimg3 from "./../../../assets/images/project-image/project-image-3.jpg";
import projectimg4 from "./../../../assets/images/project-image/project-image-4.jpg";
import projectimg5 from "./../../../assets/images/project-image/project-image-5.jpg";
import projectimg6 from "./../../../assets/images/project-image/project-image-6.jpg";
import projectimg7 from "./../../../assets/images/project-image/project-image-7.jpg";
import projectimg8 from "./../../../assets/images/project-image/project-image-8.jpg";
import projectimg9 from "./../../../assets/images/project-image/project-image-9.jpg";

const Gallery = () => {
  return (
    <div className="w-full h-fit grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 ">
      <div className="w-full h-[240px]">
        <img
          src={projectimg1}
          alt="project-image-1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[240px]">
        <img
          src={projectimg2}
          alt="project-image-2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[240px]">
        <img
          src={projectimg3}
          alt="project-image-3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[240px]">
        <img
          src={projectimg4}
          alt="project-image-4"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[240px]">
        <img
          src={projectimg5}
          alt="project-image-5"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[240px]">
        <img
          src={projectimg6}
          alt="project-image-6"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[240px]">
        <img
          src={projectimg7}
          alt="project-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[240px]">
        <img
          src={projectimg8}
          alt="project-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[240px]">
        <img
          src={projectimg9}
          alt="project-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* <img src={projectimg2} alt="project-image-2" className="w-full " /> */}
      {/* <img src={projectimg3} alt="project-image-3" className="w-full" />
      <img src={projectimg4} alt="project-image-4" className="w-full" />
      <img src={projectimg5} alt="project-image-5" className="w-full" />
      <img src={projectimg6} alt="project-image-6" className="w-full" />
      <img src={projectimg7} alt="project-image-7" className="w-full" />
      <img src={projectimg8} alt="project-image-8" className="w-full" />
      <img src={projectimg9} alt="project-image-9" className="w-full" /> */}
    </div>
  );
};

export default Gallery;
