import { Person } from "react-ionicons";
import bg from "../../assets/images/bg.jpg";

const Header = () => {
	return (
		<div
			className="w-full h-screen bg-cover relative bg-center md:px-[80px] px-8 py-[40px]"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="w-full h-full bg-black opacity-35 absolute left-0 top-0 z-20"></div>
			<div className="w-full flex items-center justify-between">
				<div className="text-white font-bold text-[28px] cursor-pointer z-50">Hostify</div>
				<div className="hidden md:flex items-center gap-[62px] z-50">
					<a
						href="#"
						className="text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-violet-300"
					>
						Hosting
					</a>
					<a
						href="#"
						className="text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-violet-300"
					>
						Dominios
					</a>
					<a
						href="#"
						className="text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-violet-300"
					>
						Sobre
					</a>
					<a
						href="#"
						className="text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-violet-300"
					>
						Contato
					</a>
				</div>
				<div className="svg-zIndex">
					<Person
						color="white"
						width="24px"
						height="24px"
						cssClasses={"cursor-pointer"}
					/>
				</div>
			</div>
			<div className="w-full flex flex-col gap-5 items-center justify-center md:mt-[100px] mt-36">
				<div className="text-center text-white font-bold md:text-[70px] text-[60px] md:max-w-[900px] leading-[90px] z-50">
					Serviços de hospedagem e domínio em nuvem de alta qualidade
				</div>
				<p className="text-white md:text-[23px] text-[18px] font-[200] max-w-[600px] text-center z-50">
					Hospede seu site nos servidores mais rápidos e ganhe a confiança dos usuários com facilidade e rapidez
				</p>
			</div>
		</div>
	);
};

export default Header;
