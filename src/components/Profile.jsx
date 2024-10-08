import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Profile = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "Profile",
      basicInfo: "Basic Information",
      info: {
        birthdate: "Birth date",
        city: "City",
        education: "Education",
        role: "Preferred Role",
      },
      answer: {
        birthdate: "04.06.1993",
        city: "Ankara",
        education: "Ankara Unv. Chemical Engineer, 2016",
        role: "Frontend, UI",
      },
      aboutMe: {
        title: "About Me",
        description: [
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
    },
    tr: {
      title: "Profil",
      basicInfo: "Kişisel Bilgiler",
      info: {
        birthdate: "Doğum Tarihi",
        city: "Şehir",
        education: "Eğitim",
        role: "Tercih Edilen Rol",
      },
      answer: {
        birthdate: "24.03.1996",
        city: "Ankara",
        education: "Ankara Ünv. Kimya Mühendisi, 2016",
        role: "Ön Uç Web Geliştirici,Kullanıcı Arayüz Tasarımcı",
      },
      aboutMe: {
        title: "Hakkımda",
        description: [
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
    },
  };

  const currentContent = content[language];

  return (
    <section
      className={`profile py-8 pb-9 ${
        theme === "dark"
          ? "bg-[#171043] text-gray-200"
          : "bg-indigo-700 text-white"
      }`}
    >
      <div className="container mx-auto max-w-[960px] px-4">
        <h2
          className={`text-4xl md:text-4xl font-bold ${
            theme === "dark" ? "text-lime-400" : "text-lime-300"
          } tracking-wide mb-8`}
        >
          {currentContent.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-normal mb-5">
              {currentContent.basicInfo}
            </h3>
            <table className="w-full">
              <tbody>
                {Object.entries(currentContent.info).map(([key, value]) => (
                  <tr key={key} className="align-top">
                    <td
                      className={`${
                        theme === "dark" ? "text-lime-400" : "text-lime-300"
                      } font-semibold pr-4 py-2`}
                    >
                      {value}
                    </td>
                    <td className="font-light py-2">
                      {currentContent.answer[key]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1723924901202-b077728b513f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="object-cover w-full h-full max-w-[300px] max-h-[300px] rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-normal mb-4">
              {currentContent.aboutMe.title}
            </h3>
            {currentContent.aboutMe.description.map((paragraph, index) => (
              <p key={index} className="mb-4 text-base md:text-lg font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
