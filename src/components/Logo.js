import initials from '../Assets/ROHAN.PNG';

export const Logo = () => {
  return (
    <div className="logo">
      <img src={initials} alt="Initials" className="h-24 w-24" /> {/* Apply size directly to the image */}
    </div>
  );
};

export default Logo;
