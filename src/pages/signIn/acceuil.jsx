import "./css/acceuil.css"
import { image1 } from "../../assets";

const Acceuil = () => {
  return (
    <>
      <div className="container_Acceuil">
        <div className="section_Aceeuil">
          <div className="Recherce_Acceuil">
            <div>Recherche de quiz</div>
            <div className="box_recherche">
              <input type="text" placeholder="football" />
              <button className="Btn1">Ok</button>
            </div>
          </div>
          <div className="Liste_quiz">
            <h4>Liste de tous les Quiz</h4>
            <span></span>
          </div>
          <div className="box_debut_quiz">
            <div className="carre_quiz_1">
              <img height="100%" width="100%" src={image1}/>
            </div>
            <div className="carre_quiz">
              <div>Nom du Quiz</div>
              <div className="niveau_quiz">
                <div>Moyenne quiz -</div>
                <div>Moyenne quiz -</div>
              </div>
            </div>
          </div>
          <div className="box_debut_quiz">
            <div className="carre_quiz_1">
              <img height="100%" width="100%" src={image1}/>
            </div>
            <div className="carre_quiz">
              <div>Nom du Quiz</div>
              <div className="niveau_quiz">
                <div>Moyenne quiz -</div>
                <div>Moyenne quiz -</div>
              </div>
            </div>
          </div>
          <div className="box_debut_quiz">
            <div className="carre_quiz_1">
              <img height="100%" width="100%" src={image1}/>
            </div>
            <div className="carre_quiz">
              <div>Nom du Quiz</div>
              <div className="niveau_quiz">
                <div>Moyenne quiz -</div>
                <div>Moyenne quiz -</div>
              </div>
            </div>
          </div>
          <div className="box_debut_quiz">
            <div className="carre_quiz_1">
              <img height="100%" width="100%" src={image1}/>
            </div>
            <div className="carre_quiz">
              <div>Nom du Quiz</div>
              <div className="niveau_quiz">
                <div>Moyenne quiz -</div>
                <div>Moyenne quiz -</div>
              </div>
            </div>
          </div>
          <div className="box_debut_quiz">
            <div className="carre_quiz_1">
              <img height="100%" width="100%" src={image1}/>
            </div>
            <div className="carre_quiz">
              <div>Nom du Quiz</div>
              <div className="niveau_quiz">
                <div>Moyenne quiz -</div>
                <div>Moyenne quiz -</div>
              </div>
            </div>
          </div>
          <div className="box_debut_quiz">
            <div className="carre_quiz_1">
              <img height="100%" width="100%" src={image1}/>
            </div>
            <div className="carre_quiz">
              <div>Nom du Quiz</div>
              <div className="niveau_quiz">
                <div>Moyenne quiz -</div>
                <div>Moyenne quiz -</div>
              </div>
            </div>
          </div>
          <div className="box_debut_quiz">
            <div className="carre_quiz_1">
              <img height="100%" width="100%" src={image1}/>
            </div>
            <div className="carre_quiz">
              <div>Nom du Quiz</div>
              <div className="niveau_quiz">
                <div>Moyenne quiz -</div>
                <div>Moyenne quiz -</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Acceuil;
