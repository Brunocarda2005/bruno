import "./Info.css";
import { useContext } from "react";
import Context from "../../../context/Context";
import Cycle from "../../../static/fotos/cycle.jpg";
import ArWeb from "../../../static/fotos/arwebstudio_logo.jpg";

export default function InfoSkill() {
  const { StateGlobal } = useContext(Context);
  const EMPRESAS = [Cycle, ArWeb];

  const empresasByState = () => {
    const empresa = StateGlobal.empresa || [];
    if (empresa.length > 1) {
      return empresa.map((data, index) => {
        return (
          <img
            className="title-skills-content-img-empresa"
            src={EMPRESAS[data]}
            alt={StateGlobal.alt}
            key={index}
          />
        );
      });
    } else if (empresa.length > 0) {
      const [data] = empresa;
      const empresaIMG = EMPRESAS[data];

      return (
        <img
          className="title-skills-content-img-empresa"
          src={empresaIMG}
          alt={StateGlobal.alt}
        />
      );
    } else {
      return "";
    }
  };

  return (
    <main className="title-skills">
      <section className="title-skills-content">
        <div className="title-skills-content-img">
          <picture className="content__empresa">{empresasByState()}</picture>
          <picture>
            <img
              className="title-skills-content-img-empresa"
              src={StateGlobal.img}
              alt={StateGlobal.alt}
            />
          </picture>
        </div>
        <p className="title-skills-content-des">{StateGlobal.des}</p>
        <h4 className="title-skills-content-level">{StateGlobal.level}</h4>
      </section>
    </main>
  );
}
