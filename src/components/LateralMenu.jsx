import React from "react";
import { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cowLogo from "../media/images/cow_logo.svg";
import ChapterAccordion from "./ChapterAccordion";
import menuexit from "../media/images/menuexit.svg";
import { useStore } from "@nanostores/react";
import { headervisible } from "../layouts/minicontext";
const LateralMenu = () => {
  const [open, setOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("lateral_menu");
  const header = useStore(headervisible);

  // manejo de menulateral por contexto compartido con el header del capitulo
  const [visibleHamburguer, setVisibleHamburguer] =
    useState("floating_hamburger");
  useEffect(() => {
    if (header && visibleHamburguer == "floating_hamburger visible") {
      setVisibleHamburguer("floating_hamburger hidden");
      setMenuClass("lateral_menu");
      setOpen(false);
    } else if (
      header == false &&
      (visibleHamburguer == "floating_hamburger" ||
        visibleHamburguer == "floating_hamburger hidden")
    ) {
      setVisibleHamburguer("floating_hamburger visible");
    } else {
    }
  }, [header]);

  return (
    <>
      {/* // espacio real para la barra */}
      {open === true ? <div className="lateral_menu__relative_block" /> : null}

      {/* // boton flotante hamburguesa */}
      {open === false ? (
        <div
          className={visibleHamburguer}
          onClick={() => {
            setOpen(true);
            setMenuClass("lateral_menu active");
          }}
        >
          <FontAwesomeIcon icon={faBars} size="3x" />
        </div>
      ) : null}

      {/* //menu lateral */}
      <div className={menuClass}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={cowLogo} className="lateral_menu__logo" />
          <img
            src={menuexit}
            className="lateral_menu__exit"
            onClick={() => {
              setOpen(false);
              setMenuClass("lateral_menu");
            }}
          />
        </div>

        <h3 className="lateral_menu__titulo">Vet An??lisis Datos</h3>
        <ChapterAccordion
          chapter={{
            texto: "1- Definici??nes generales de la ciencia de los datos",
            link: "/post",
          }}
          subchapters={[
            {
              texto: "1.1-Qu?? es la ciencia de los datos",
              link: "#definicion",
            },
            { texto: "1.2- Qu?? son los datos crudos", link: "#datos" },
            {
              texto: "1.3- Clasificaci??n de los datos seg??n su naturaleza",
              link: "#raw",
            },
          ]}
        />

        <ChapterAccordion
          chapter={{
            texto: "2- Ejemplos pr??cticos para manejar los datos estructurados",
            link: "/examples",
          }}
          subchapters={[
            {
              texto: "2.1-C??mo crear campos con criterio de validaci??n",
              link: "#fechas",
            },
            { texto: "2.2- C??mo crear listas desplegables", link: "#listas" },
            {
              texto: "2.3- C??mo manejar los datos cuantitativos",
              link: "#cuantitativas",
            },
            {
              texto: "2.4- Listas dependientes de otras -Madre e hijas- ",
              link: "#madrehija",
            },
            {
              texto:
                "2.5- C??mo solucionar problemas con datos importados o secundarios",
              link: "#importados",
            },
            {
              texto:
                "2.5.1- Inconsistencia en los terminos para referirse a un evento",
              link: "#importados",
            },
            {
              texto: "2.5.2- Revisar los datos duplicados en los registros",
              link: "#duplicados",
            },
            {
              texto:
                "2.5.3- Que hacer cuando hacen falta datos en los registros",
              link: "#missing",
            },
          ]}
        />

        <ChapterAccordion
          chapter={{
            texto: "3- Principios generales de las probabilidades",
            link: "/probabilidades",
          }}
          subchapters={[
            {
              texto: "3.1-??Qu?? es una probabilidad y para que nos sirve?",
              link: "#definicion",
            },
            {
              texto: "3.2- Veamos algunos t??rminos importantes",
              link: "#glosario",
            },
            {
              texto: "3.3- Probabilidad de eventos independientes",
              link: "#independientes",
            },
            {
              texto: "3.4- Probabilidad de eventos dependientes",
              link: "#dependientes",
            },
            {
              texto: "3.5- Que son las permutaciones y como se calculan",
              link: "#permutaciones",
            },
            {
              texto:
                "3.6- Que son las variaciones y como se diferencian de las permutaciones",
              link: "#variaciones",
            },
            { texto: "3.7- Que son las combinaciones", link: "#combinaciones" },
          ]}
        />

        <ChapterAccordion
          chapter={{
            texto: "3.2- Principios generales de las probabilidades-2a Parte",
            link: "/probabilidades2",
          }}
          subchapters={[
            {
              texto: "3.8- que es una probabilidad condicional",
              link: "#condicional",
            },
            { texto: "3.9- Regla de la probabilidad total", link: "#total" },
            { texto: "3.10- Regla de la adici??n", link: "#adicion" },
            {
              texto: "3.11- Regla de la multiplicaci??n",
              link: "#multiplicacion",
            },
            { texto: "3.12- El teorema de bayes ", link: "#bayes" },
          ]}
        />

        <ChapterAccordion
          chapter={{
            texto:
              "3.3- Principios generales de las probabilidades- Gen??tica cualitativa",
            link: "/probabilidades3",
          }}
          subchapters={[
            {
              texto: "3.13- Probabilidades en gen??tica cualitativa",
              link: "#general",
            },
          ]}
        />

        <ChapterAccordion
          chapter={{
            texto: "4- C??mo se distribuyen los datos y cual es su utilidad",
            link: "/distribuciones",
          }}
          subchapters={[
            {
              texto: "4.1-??Qu?? es la distribucion de una variable?",
              link: "#definicion",
            },
            {
              texto: "4.2- Veamos algunos t??rminos importantes",
              link: "#glosario",
            },
            { texto: "4.3- Distribuciones discretas", link: "#discretas" },
            {
              texto: "4.3.1- Distribuciones discretas - Uniforme",
              link: "#discretas",
            },
            {
              texto: "4.3.2- Distribuciones discretas - Bernoulli",
              link: "#bernoulli",
            },
            {
              texto: "4.3.3- Distribuciones discretas - Binomial",
              link: "#binomial",
            },
            {
              texto: "4.3.3.1- Distribucion Binomial en Excel",
              link: "#binexcel",
            },
            {
              texto: "4.3.4- Distribucion discretas - Poisson",
              link: "#poisson",
            },
          ]}
        />

        <ChapterAccordion
          chapter={{
            texto:
              "4.2- C??mo se distribuyen los datos y cual es su utilidad - Distribuciones Continuas",
            link: "/distribuciones2",
          }}
          subchapters={[
            { texto: "4.4- Distribuciones continuas", link: "#continuas" },
            {
              texto: "4.4.1- Distribuciones continuas - normal",
              link: "#normal",
            },
            {
              texto: "4.4.2- Distribuciones continuas - normal estandarizada",
              link: "#normal-estandar",
            },
            {
              texto: "4.4.3- Distribuciones continuas- t-Student ",
              link: "#t-studen",
            },
            {
              texto: "4.4.4- Distribuciones continuas- Chi-Cuadrado ",
              link: "#chi-cuadrado",
            },
            { texto: "4.5- Teorema central del l??mite", link: "#teorema" },
          ]}
        />

        <ChapterAccordion
          chapter={{
            texto: "5- Estad??stica descriptiva y an??lisis inicial de los datos",
            link: "/analisis",
          }}
          subchapters={[
            {
              texto: "5.1- Presentaci??n de datos categ??ricos nominales",
              link: "#categoricos",
            },
            {
              texto: "5.2- Presentaci??n de datos cuantitativos",
              link: "#cuantitativos",
            },
            {
              texto:
                "5.3- Visualizaci??n de variables cuantitativas y categ??ricas",
              link: "#visualizacion",
            },
            { texto: "5.4- Estad??stica descriptiva", link: "#descriptiva" },
            { texto: "5.4.1- Medidas de tendencia central", link: "#central" },
            { texto: "5.4.2- Medidas de dispersi??n", link: "#dispersion" },
            {
              texto: "5.5- Ejemplo de estad??stica descriptiva",
              link: "#ejemplo",
            },
            { texto: "5.6- Relaciones entre variables", link: "#covarianza" },
          ]}
        />

        <ChapterAccordion
          chapter={{
            texto: "6- Pruebas de hip??tesis e intervalos",
            link: "/analisis2",
          }}
          subchapters={[
            { texto: "6.1- Pruebas de hip??tesis", link: "#hipotesis" },
            {
              texto: "6.2- Tipos de pruebas- una o dos colas ",
              link: "#tests",
            },
            {
              texto: "6.3- Intervalos de confianza - varianza conocida",
              link: "#intervalo",
            },
            {
              texto: "6.3.1- Intervalos de confianza - varianza conocida",
              link: "#intervalo",
            },
            {
              texto: "6.3.2- Intervalos de confianza - varianza desconocida",
              link: "#intervalo2",
            },
            {
              texto:
                "6.4- Intervalo de confianza para la diferencia de dos medias en poblaciones normales independientes",
              link: "#intervalo3",
            },
            {
              texto:
                "6.5- Intervalo de confianza para la diferencia de dos medias dependientes",
              link: "#intervalo4",
            },
          ]}
        />

        <ChapterAccordion
          chapter={{ texto: "7- An??lisis de Varianza (ANAVA)", link: "/anava" }}
          subchapters={[
            {
              texto: "7.1-Que es el an??lisis de varianza (ANAVA)",
              link: "#anava",
            },
            { texto: "7.2- El ANAVA de un solo factor", link: "#unianova" },
            {
              texto: "7.3- El ANAVA de dos factores sin replicaci??n",
              link: "#twoanova",
            },
            {
              texto: "7.4- El ANAVA de dos factores con replicaci??n",
              link: "#twoanovarep",
            },
            { texto: "7.5- La regresi??n lineal", link: "#linearreg" },
          ]}
        />

        <ChapterAccordion
          chapter={{
            texto: "7.2- An??lisis de Varianza (ANAVA)-Regresiones",
            link: "/anava2",
          }}
          subchapters={[
            {
              texto: "7.6- La regresi??n lineal simple en Excel",
              link: "#reglinex",
            },
            { texto: "7.7- La regresi??n m??ltiple en Excel ", link: "#regmult" },
            {
              texto: "7.8- La regresi??n cuadr??tica en Excel",
              link: "#regquad",
            },
            {
              texto:
                "7.9- La regresi??n con interacci??n de elementos independientes en Excel",
              link: "#reginter",
            },
            {
              texto:
                "7.10- Variables nominales y construcci??n de variables ficticias",
              link: "#dummyvars",
            },
          ]}
        />
      </div>
    </>
  );
};

export default LateralMenu;
