import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import footballMohamedSalah from '../../assets/images/wallpapers/football-mohamed-salah.jpg';

const Reviews = () => {
    return (
        <section
            className="w-full bg-cover bg-center text-white py-12 relative"
            style={{ backgroundImage: `url(${footballMohamedSalah})`, backgroundPosition: '40% 0%' }}
        >
            {/* Black Transparent Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            
            {/* Content */}
            <div className="relative max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-96 text-center space-y-6">
                {/* Title */}
                <h1 className="text-3xl font-bold uppercase">
                    Customers Reviews
                </h1>
                
                {/* Quote Section */}
                <div className="flex flex-col items-center space-y-4">
                    <FormatQuoteRoundedIcon style={{ fontSize: 40 }} />
                    <AccountCircleIcon style={{ fontSize: 48 }} />
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sint porro explicabo pariatur a aspernatur eligendi, nesciunt nisi alias placeat, maiores ipsam nostrum inventore, sed tempore tenetur perferendis autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                {/* Author */}
                <h2 className="font-bold text-lg">Lrhali Mohamed</h2>
            </div>
        </section>
    );
};

export default Reviews;
